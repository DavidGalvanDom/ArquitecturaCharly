using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chr.Css.WebApi.Models
{
    public class CiudadDTO
    {
        [Required]
        public int IdCiudad { get; set; }

        public string Descripcion { get; set; }
    }
}
