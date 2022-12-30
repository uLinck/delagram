namespace Delegram.Api.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public IFormFile Media { get; set; }
        public List<Post> Posts { get; set; }
        public User Owner { get; set; }
        public List<User> Likes { get; set; }
    }
}
