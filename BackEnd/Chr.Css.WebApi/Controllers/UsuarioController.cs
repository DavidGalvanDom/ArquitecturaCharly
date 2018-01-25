using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using Chr.Css.WebApi.Entities;

namespace Chr.Css.WebApi.Controllers
{
    [RoutePrefix("api/Usuario")]
    public class UsuarioController : ApiController
    {
        // GET api/values/5
        [Authorize]
        [Route("")]
        public IHttpActionResult Get()
        {
            using (var context = new CSSUsersEntities())
            {
                return Ok(context.Usuarios.ToList());
            }
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
