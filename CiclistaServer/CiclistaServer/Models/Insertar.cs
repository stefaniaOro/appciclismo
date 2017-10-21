using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace CiclistaServer.Models
{
    public class Insertar
    {
       
            [Key]
            public int id_ciclista { get; set; }
            [Required]
            public string nombre_ciclista { get; set; }
            [Required]
            public string pais_ciclista { get; set; }
            [Required]
            public string equipo_ciclista { get; set; }
        }
    }


