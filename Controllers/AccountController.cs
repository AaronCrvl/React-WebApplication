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
        private Account AccountModel;

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

        [HttpPost("Register/{name}/{password}/{email}")]
        public IActionResult Register(string name, string password, string email)
        {
            AccountModel = new Account();
            ContentResult CustomResponse = new ContentResult();
            long Validation = -1;

            var acct = AccountRepo.Signin(name, password);

            if (acct != null)
            {
                CustomResponse.Content = "This combinatiom of user/password already has an account!";
                CustomResponse.StatusCode = 405;
                return CustomResponse;
            }
            else
            {                
                Validation = AccountModel.Validate(name, password, email);
                switch (Validation)
                {
                    case 1:
                        CustomResponse.Content = "The size of the information given is too short.";
                        CustomResponse.StatusCode = 405;
                        return CustomResponse;

                    case 2:
                        CustomResponse.Content = "The filed information have invalid special characters.";
                        CustomResponse.StatusCode = 405;
                        return CustomResponse;

                    case 3:
                        bool registered = AccountRepo.Register(name, password, email);
                        if (registered)
                        {
                            CustomResponse.StatusCode = 200;
                            return CustomResponse;
                        }
                        else
                        {
                            CustomResponse.Content = "An error ocourred while trying to register an new account, try again later!";
                            CustomResponse.StatusCode = 405;
                            return CustomResponse;
                        }
                        
                    default:
                        return new NoContentResult();
                }                
            }
        }
    }
}

//Calling https://localhost:44305/api/SignIn