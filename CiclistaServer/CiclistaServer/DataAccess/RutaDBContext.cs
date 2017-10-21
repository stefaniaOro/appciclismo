using CiclistaServer.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CiclistaServer.DataAccess
{
    public class RutaDBContext: DbContext
    {
        public DbSet<Insertrutas> Insertrutas { get; set; }
    }
}