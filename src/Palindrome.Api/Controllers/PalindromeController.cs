using Microsoft.AspNetCore.Mvc;
using Palindrome.Api.Services;
using Palindrome.Api.Services.Contracts;

namespace Palindrome.Api.Controllers
{
    [Route("palindromes.api")]
    public class PalindromeController : Controller
    {
        private readonly IPalindromeService _palindromeService;

        public PalindromeController(IPalindromeService palindromeService) => _palindromeService = palindromeService;

        [HttpGet("palindromes")]
        public IActionResult Get()
        {
            return Ok(_palindromeService.GelAllPalindromes());
        }
        
        [HttpPost("palindrome/{text}")]
        public IActionResult Post([FromRoute]string text)
        {
            if (!PlindromeStore.IsPlindrome(text))
            {
                return BadRequest();
            }

            return Ok(_palindromeService.CreatePalindrome(text));
        }
    }
}
