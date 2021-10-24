using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/")]
    public class AccountController : Controller
    {
        private readonly AppDbContext Context;        
        [HttpGet("Account/")]
        public IActionResult SingIn(string name, long password)
        {
            var account = Context.Find(typeof(Account), name, password);
            if (account == null)
                return new ObjectResult(new String("TESTEEEEEEEEE"));
            else
                return new ObjectResult(account);
        }
    }
}