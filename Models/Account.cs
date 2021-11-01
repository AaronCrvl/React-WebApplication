using ReactWebApp.Models;
using System;
using System.Collections.Generic;

namespace WebApplication1.Models
{
    public partial class Account
    {
        #region Private Variables
        private eAccountValidationErrors Errors;
        public int Id { get; set; }
        public string Nanme { get; set; }
        public string User_Password { get; set; }
        public string Email { get; set; }
        public DateTime? Inclusion_Date { get; set; }
        public bool? Ativo { get; set; }
        #endregion
        
        #region Functions
        public static bool hasSpecialChar(string input)
        {
            string specialChar = @"\|!#$%&/()=?»«@£§€{}.-;'<>_,";
            foreach (var item in specialChar)
            {
                if (input.Contains(item))
                    return true;
            }
            return false;
        }

        public long Validate(string name, string password, string email)
        {
            if (name.Length <= 0 || password.Length <= 0 || email.Length <= 0)
                return (long)eAccountValidationErrors.InvalidInformation;
            else
            {
                bool specialCharacter = false;
                specialCharacter = hasSpecialChar(name);
                specialCharacter = hasSpecialChar(password);
                specialCharacter = hasSpecialChar(email);

                if (specialCharacter)
                    return (long)eAccountValidationErrors.InvalidSpecialCharacter;
                else
                    return (long)eAccountValidationErrors.Valid;
            }
        }

        #endregion
    }
}
