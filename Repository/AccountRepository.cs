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

        public int getHigherId()
        {
            Account HighId = (Account)context.Account.OrderByDescending(a => a.Id).FirstOrDefault();
            return HighId.Id;
        }

        public Account Signin(string name, string password)
        {
            using (var conection = context.Database.BeginTransaction())
            {
                try
                {
                    var dbEntry = context.Account.FirstOrDefault(
                    acc => acc.Nanme == name &&
                    acc.User_Password == password);

                    if (dbEntry != null)
                        return dbEntry;
                    else
                        return null;
                }
                catch (Exception e)
                {
                    conection.Rollback();
                    throw e;
                }
            }
        }

        public bool Register(string name, string password, string email)
        {
            using (var conection = context.Database.BeginTransaction())
            {
                try
                {
                    Account newAcct = new Account();
                    newAcct.Id = getHigherId() + 1;
                    newAcct.Nanme = name;
                    newAcct.User_Password = password;
                    newAcct.Email = email;
                    newAcct.Ativo = true;
                    newAcct.Inclusion_Date = DateTime.Now;

                    var acctReturn = context.Account.Add(newAcct);
                    context.Database.CommitTransaction();
                    context.SaveChanges();

                    return true;
                }
                catch (Exception e)
                {
                    conection.Rollback();
                    return false;
                    throw e;
                }
            }
        }
    }
}
