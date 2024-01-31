using System.Diagnostics;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SampleService.Controllers
{
    [ApiController]
    [Route("api/v1/sas")]
    [Authorize] // Apply authorization globally for the entire controller
    public class SampleController : ControllerBase
    {
        private readonly ILogger<SampleController> _logger;

        public SampleController(ILogger<SampleController> logger)
        {
            _logger = logger;
        }

        [HttpGet("public")]
        [AllowAnonymous] 
        public IActionResult PublicEndpoint()
        {
            _logger.LogInformation("Public endpoint accessed");
            return Ok("This is a public endpoint");
        }

        [HttpGet("private")]
        public IActionResult PrivateEndpoint()
        {
            _logger.LogInformation("Private endpoint accessed");
            return Ok("This is a private endpoint");
        }
    }
}
