namespace Delegram.Api.Models.Messager
{
    public class Message
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int Reply { get; set; }
        public IFormFile? Media { get; set; }
        public User Owner { get; set; }
        public DateTimeOffset SentAt { get; set; }
    }
}
