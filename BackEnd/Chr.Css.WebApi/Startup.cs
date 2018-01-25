using Owin;
using Microsoft.Owin;
using System.Web.Http;
using System.Web.Mvc;

[assembly: OwinStartup(typeof(Chr.Css.WebApi.Startup))]
namespace Chr.Css.WebApi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();

            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);

            ConfigureOAuth(app);

            AreaRegistration.RegisterAllAreas();
            WebApiConfig.Register(config);
            app.UseWebApi(config);           
        }

      
    }
}