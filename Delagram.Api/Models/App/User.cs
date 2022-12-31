using Delegram.Api.Security;
using System.Reflection.Metadata;

namespace Delegram.Api.Models
{
    public class User
    {
        public int Id { get; set; }
        public IFormFile ProfilePicture { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public List<User> Followers { get; set; }
        public List<User> Following { get; set; }
        public List<Post> Posts { get; set; }
        public Role Role { get; set; } 
    }
}
