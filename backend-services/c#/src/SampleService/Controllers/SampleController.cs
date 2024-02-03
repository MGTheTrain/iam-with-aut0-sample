using System.Diagnostics;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SampleService.Controllers
{
    [ApiController]
    [Route("api/v1/sas")]
    public class SampleController : ControllerBase
    {
        private readonly ILogger<SampleController> _logger;

        public SampleController(ILogger<SampleController> logger)
        {
            _logger = logger;
        }

        [HttpGet("public")]
        [AllowAnonymous] 
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult PublicEndpoint()
        {
            _logger.LogInformation("Public endpoint accessed");
            return Ok("This is a public endpoint");
        }

        [HttpGet("rbac")]
        [Authorize("admin:permission")] 
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        public IActionResult PrivateEndpointConsideringRBAC()
        {
            _logger.LogInformation("Private endpoint only considering JWTs from and audience for authentication and RBAC");
            return Ok("This is a private endpoint only considering JWTs from and audience for authentication and RBAC");
        }

        [HttpGet("auth")]
        [Authorize] 
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public IActionResult PrivateEndpoint()
        {
            _logger.LogInformation("Private endpoint only considering JWTs from and audience for authentication");
            return Ok("This is a private endpoint only considering JWTs from and audience for authentication");
        }
    }
}
