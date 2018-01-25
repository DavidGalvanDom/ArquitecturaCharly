using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;

using Chr.Css.WebApi.Entities;

namespace Chr.Css.WebApi.Token
{
    public class CustomOAuthProvider: OAuthAuthorizationServerProvider
    {
        /// <summary>
        /// Se valida los datos del usuario para generar el token
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        public override Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var user = context.OwinContext.Get<CSSUsersEntities>().Usuarios.FirstOrDefault(u => u.NombreUsuario == context.UserName);
            if (!ValidarPassword(user, context.Password))
            {
                context.SetError("invalid_grant", "El nombre de usuario o contrasena son incorrectos.");
                context.Rejected();
                return Task.FromResult<object>(null);
            }

            var props = new AuthenticationProperties(new Dictionary<string, string>
            {
                {
                        "audience", (context.ClientId == null) ? string.Empty : context.ClientId
                }
            });

            var ticket = new AuthenticationTicket(SetClaimsIdentity(context, user), props);
            context.Validated(ticket);

            return Task.FromResult<object>(null);
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="usuario"></param>
        /// <param name="contrasena"></param>
        /// <returns></returns>
        private bool ValidarPassword(Usuario usuario, string contrasena)
        {
            if (usuario == null) return false;

            if (usuario.Contrasena != contrasena) return false;

            return true;
        }

        /// <summary>
        /// Se valida el cliente que manda crear el token 
        /// Se puede validar que el cliente "App" del lado del server manda crear el token y se valida aparte del usuario el cliente
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        public override Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            string clientId = string.Empty;
            string clientSecret = string.Empty;
            string symmetricKeyAsBase64 = string.Empty;

            if (!context.TryGetBasicCredentials(out clientId, out clientSecret))
            {
                context.TryGetFormCredentials(out clientId, out clientSecret);
            }

            if (context.ClientId == null)
            {
                context.SetError("invalid_clientId", "client_Id is not set");
                return Task.FromResult<object>(null);
            }

            var audience = AudiencesStore.FindAudience(context.ClientId);

            if (audience == null)
            {
                context.SetError("invalid_clientId", string.Format("Invalid client_id '{0}'", context.ClientId));
                return Task.FromResult<object>(null);
            }

            context.OwinContext.Set<string>("as:clientAllowedOrigin", "*");
            context.Validated();
            return Task.FromResult<object>(null);
        }

        private static ClaimsIdentity SetClaimsIdentity(OAuthGrantResourceOwnerCredentialsContext context, Usuario user)
        {
            var identity = new ClaimsIdentity("JWT");
            identity.AddClaim(new Claim(ClaimTypes.Name, context.UserName));
            identity.AddClaim(new Claim(ClaimTypes.Role, "user"));
            identity.AddClaim(new Claim("sub", context.UserName));
            identity.AddClaim(new Claim("idUser", user.IdUsuario.ToString()));
            
            return identity;
        }

        //public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        //{
        //    foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
        //    {
        //        context.AdditionalResponseParameters.Add(property.Key, property.Value);
        //    }

        //    return Task.FromResult<object>(null);
        //}
    }
}
