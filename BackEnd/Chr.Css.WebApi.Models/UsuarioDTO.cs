using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Chr.Css.WebApi.Models
{
    public class UsuarioDTO
    {
        [Required]
        public int IdUsuario { get; set; }

        public byte[] Nombre { get; set; }
        public byte[] Direccion { get; set; }

        [Required]
        public int IdPerfil { get; set; }

        public string Contrasena { get; set; }
        public string Usuario1 { get; set; }
        public string Correo { get; set; }

        [Required]
        public string NombreUsuario { get; set; }
    }
}
