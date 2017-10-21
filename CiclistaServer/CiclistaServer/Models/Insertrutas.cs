using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace CiclistaServer.Models
{
    public class Insertrutas
    {

        [Key]
        public int id_ruta { get; set; }
        [Required]
        public string nombre_ruta { get; set; }
        [Required]
        public string pais_ruta { get; set; }
        [Required]
        public string ciudad_ruta { get; set; }
        [Required]
        public string Descripcion { get; set; }
        [Required]
        public int kilometros { get; set; }
    }
}