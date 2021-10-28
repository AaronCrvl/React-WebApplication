using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;
using WebApplication1.Repository;

namespace ReactWebApp.Repository
{
    public class AccountRepository : IAccountRepository
    {
        private readonly AppDbContext contexto;

        public AccountRepository(AppDbContext _contexto)
        {
            contexto = _contexto;
        }

        public string Signin()
        {
            //Account acct =  contexto.Account.Find("TEST");
            return new String("API CALEED SUCESS");
        }
    }
}
