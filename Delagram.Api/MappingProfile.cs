using AutoMapper;
using Delegram.Api.Models;
using Delegram.Api.Models.DTOs;

namespace Delegram.Api
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, LoginDTO>();
        }
    }
}
