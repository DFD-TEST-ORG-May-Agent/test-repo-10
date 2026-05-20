using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Index(string redirect)
        {
            // Potential open redirect vulnerability for testing
            return Redirect(redirect);
        }

        [HttpPost]
        public IActionResult ProcessData(string data)
        {
            // Potential XSS vulnerability for testing
            return Content("<html><body>" + data + "</body></html>", "text/html");
        }
    }
}
