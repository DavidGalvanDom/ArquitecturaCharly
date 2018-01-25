using System;
using Microsoft.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.DataHandler.Encoder;
using Microsoft.Owin.Security.Jwt;
using Microsoft.Owin.Security.OAuth;
using Owin;

using Chr.Css.WebApi.Token;
using Chr.Css.WebApi.Entities;
using System.Threading.Tasks;

namespace Chr.Css.WebApi
{
    public partial class Startup
    {
        public void ConfigureOAuth(IAppBuilder app)
        {
            var audience = "199153c2315149bc9ecb3e85e03f1144";
            Audience oAudience = AudiencesStore.FindAudience(audience);
            var issuer = "http://Chr.WebApi.Core";
            var secret = TextEncodings.Base64Url.Decode(oAudience.Base64Secret);

            app.CreatePerOwinContext(() => new CSSUsersEntities());
            
            //Server generacion del token
            OAuthAuthorizationServerOptions OAuthServerOptions = new OAuthAuthorizationServerOptions()
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/oauth2/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(60),
                Provider = new CustomOAuthProvider(),
                AccessTokenFormat = new CustomJwtFormat(issuer)
            };

            //Validacion del token por Controllador
            app.UseJwtBearerAuthentication(
                 new JwtBearerAuthenticationOptions
                 {
                     AuthenticationMode = AuthenticationMode.Active,
                     AllowedAudiences = new[] { audience },
                     IssuerSecurityTokenProviders = new IIssuerSecurityTokenProvider[]
                     {
                        new SymmetricKeyIssuerSecurityTokenProvider(issuer, secret)
                     },
                     Provider = new OAuthBearerAuthenticationProvider
                     {
                         OnValidateIdentity = context =>
                         {
                             //context.Ticket.Identity.AddClaim(new System.Security.Claims.Claim("newCustomClaim", "newValue"));
                             return Task.FromResult<object>(null);
                         }
                     }
                 });

            // Token Generation
            app.UseOAuthAuthorizationServer(OAuthServerOptions);
        }
    }
}