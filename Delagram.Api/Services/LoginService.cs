using AutoMapper;
using Delegram.Api.Models;
using Delegram.Api.Models.DTOs;
using Delegram.Api.Repositories.Security;
using Delegram.Api.Security;
using Delegram.Api.Services.Interfaces;

namespace Delegram.Api.Services
{
    public class LoginService : ILoginService
    {
        private readonly IMapper _mapper;

        public LoginService(IMapper mapper)
        {
            _mapper = mapper;
        }

        public string Authenticate(string username, string password)
        {
            // Recupera o usuário
            var user = UserRepository.Get(username, password);

            // Verifica se o usuário existe
            if (user == null)
                return null;

            // Gera o Token
            var token = TokenService.GenerateToken(user);

            // Retorna os dados
            return token;
        }
    }
}
