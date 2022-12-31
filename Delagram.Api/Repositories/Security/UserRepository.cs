using Delegram.Api.Models;
using Delegram.Api.Security;

namespace Delegram.Api.Repositories.Security
{
    public static class UserRepository
    {
        public static List<User> Users = new List<User>()
        { 
            new()
            {
                Id = 1, Username = "batman", Password = "batman", Role = Role.Pinto
            },
            new()
            {
                Id = 2, Username = "robin", Password = "robin", Role =  Role.Admin 
            }
        };

        public static User Get(string username, string password)
        {
            return Users.Where(x => x.Username.ToLower() == username.ToLower() && x.Password == password).FirstOrDefault();
        }

        public static List<User> GetAll()
        {
            return Users;
        }
    }
}