namespace Delegram.Api.Services.Interfaces
{
    public interface ILoginService
    {
        //public string getIdLoggedUser();
        //public UserDTO GetLoggedUser();
        public string Authenticate(string username, string password);
    }
}
