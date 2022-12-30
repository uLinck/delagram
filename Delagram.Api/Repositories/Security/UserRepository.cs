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
                Id = 1, Username = "batman", Password = "batman", Role = new HashSet<Role> { Role.Pinto }
            },
            new()
            {
                Id = 2, Username = "robin", Password = "robin", Role = new HashSet<Role> { Role.Admin }
            }
        };

        public static User Get(string username, string password)
        {
            return Users.Where(x => x.Username.ToLower() == username.ToLower() && x.Password == x.Password).FirstOrDefault();
        }
    }
}