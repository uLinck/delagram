namespace Delegram.Api.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public User Owner { get; set; }
        public DateTimeOffset CreatedAt { get; set; }
        public List<User> Likes { get; set; }
        public List<Comment> Replies { get; set; }
    }
}
