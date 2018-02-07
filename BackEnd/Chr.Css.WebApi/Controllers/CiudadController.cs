using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using Chr.Css.WebApi.Models;

namespace Chr.Css.WebApi.Controllers
{
    [RoutePrefix("api/Ciudad")]
    public class CiudadController : ApiController
    {
        // GET api/values/5
        [Authorize]
        [Route("")]
        public IHttpActionResult Get()
        {
            var lstCiudad = new List<CiudadDTO>();
            try
            {
                lstCiudad.Add(new CiudadDTO() { IdCiudad = 1, Descripcion = "Leon" });
                lstCiudad.Add(new CiudadDTO() { IdCiudad = 2, Descripcion = "Silao" });
                lstCiudad.Add(new CiudadDTO() { IdCiudad = 3, Descripcion = "Guanajuato" });

                return Ok(new { success = true, data = lstCiudad });
            }
            catch(Exception exp)
            {
                return Ok(new { success = false, message = exp.Message });
            }
         
            //using (var context = new CSSUsersEntities())
            //{
            //    return Ok(context.Ciudad.ToList());
            //}
        }
    
    }
}