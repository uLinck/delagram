﻿using Delegram.Api.Models.DTOs;
using Delegram.Api.Repositories.Security;
using Delegram.Api.Security;
using Delegram.Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;

namespace Delegram.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly ILoginService _loginService;

        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpPost]
        [Route("Authenticate")]
        public async Task<ActionResult<dynamic>> Authenticate([FromBody] UserDTO model)
        {
            var token = _loginService.Authenticate(model.Username, model.Password);

            if (token is null)
                return NotFound();

            return token;
        }
    }
}