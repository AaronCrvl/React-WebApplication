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
        private readonly AppDbContext context;

        public AccountRepository(AppDbContext _contexto)
        {
            context = _contexto;
        }

        public Account Signin(string name, string password)
        {
            var dbEntry = context.Account.FirstOrDefault(
                acc => acc.Nanme == name &&
                acc.User_Password == password);

            if (dbEntry != null)
                return dbEntry;
            else
                return null;
        }
    }
}
