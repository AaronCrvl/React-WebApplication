using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactWebApp.Repository;
using WebApplication1.Models;
using WebApplication1.Repository;

namespace WebApplication1.Controllers
{    
    [Route("api")]
    public class AccountController : Controller
    {
        //private readonly IAccountRepository AccountRepo;

        //public AccountController(IAccountRepository _AccountRepo)
        //{
        //    this.AccountRepo = _AccountRepo;
        //}

        private readonly AppDbContext Context;        

        [HttpGet("SignIn")]
        public IActionResult SingIn()
        {
            return new ObjectResult("API CALLED SUCESSFULLY");
            //var account = Context.Find(typeof(Account), "TEST");
            //if (account == null)
            //    return new ObjectResult(new String("API CALLED - NULL OBJECT"));
            //else
            //    return new ObjectResult(account);
        }
    }
}

//Calling https://localhost:44305/api/SignIn