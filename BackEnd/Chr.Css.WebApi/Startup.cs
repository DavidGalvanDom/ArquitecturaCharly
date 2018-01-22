using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(Chr.Css.WebApi.Startup))]
namespace Chr.Css.WebApi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureOAuth(app);
        }
    }
}