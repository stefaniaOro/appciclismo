using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using CiclistaServer.Models;

namespace CiclistaServer.DataAccess
{
    public class CiclistaDBContext : DbContext
    {

        public DbSet<Insertar> Insertar { get; set; }
      

    

    }
}