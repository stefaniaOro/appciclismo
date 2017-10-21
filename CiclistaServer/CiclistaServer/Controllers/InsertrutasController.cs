using CiclistaServer.DataAccess;
using CiclistaServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CiclistaServer.Controllers
{
    public class InsertrutasController : Controller
    {
        private RutaDBContext _ciclistaDbContext = new RutaDBContext();

        [HttpPost]

        public ActionResult SaveInsertrutas(Insertrutas insertrutas)
        {

            _ciclistaDbContext.Insertrutas.Add(insertrutas);
            int savedRecords = _ciclistaDbContext.SaveChanges();
            var result = new { SavedRecords = savedRecords };

            return Json(result);
        }



        public ActionResult GetAllInsertrutas()
        {
            return Json(_ciclistaDbContext.Insertrutas.ToList(), JsonRequestBehavior.AllowGet);
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