using CiclistaServer.DataAccess;
using CiclistaServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CiclistaServer.Controllers
{
    public class InsertarController : Controller
    {
        private CiclistaDBContext _ciclistaDbContext = new CiclistaDBContext();

        [HttpPost]

        public ActionResult SaveInsertar(Insertar insertar)
        {

            _ciclistaDbContext.Insertar.Add(insertar);
            int savedRecords = _ciclistaDbContext.SaveChanges();
            var result = new { SavedRecords = savedRecords };

            return Json(result);
        }

    
        
        public ActionResult GetAllInsertar()
        {
            return Json(_ciclistaDbContext.Insertar.ToList(), JsonRequestBehavior.AllowGet);
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _ciclistaDbContext.Dispose();
            }

            base.Dispose(disposing);
        }
    }
}