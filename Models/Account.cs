using System;
using System.Collections.Generic;

namespace WebApplication1.Models
{
    public partial class Account
    {
        public int Id { get; set; }
        public string Nanme { get; set; }
        public string User_Password { get; set; }
        public string Email { get; set; }
        public DateTime? Inclusion_Date { get; set; }
        public bool? Ativo { get; set; }
    }
}
