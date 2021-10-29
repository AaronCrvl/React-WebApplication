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
        private readonly IAccountRepository AccountRepo;

        public AccountController(IAccountRepository _AccountRepo)
        {
            this.AccountRepo = _AccountRepo;
        }

        private readonly AppDbContext Context;        

        [HttpGet("SignIn/{name}/{password}")]
        public IActionResult SingIn(string name, string password)
        {
            var acct = AccountRepo.Signin(name, password);
            if (acct == null)
                return new ObjectResult("Account not found.");
            else
                return new ObjectResult(acct);
        }
    }
}

//Calling https://localhost:44305/api/SignIn