
using Palindrome.Api.DBService;
using Palindrome.Api.Services.Contracts;
using System.Collections.Generic;
using System.Linq;

namespace Palindrome.Api.Services
{
    public class PalindromeService : IPalindromeService
    {
        private readonly IPalindromeDbService _palindromeDbService;

        public PalindromeService(IPalindromeDbService palindromeDbService)
        {
            _palindromeDbService = palindromeDbService;
        }

        public string CreatePalindrome(string palindrome)
        {
            _palindromeDbService.AddPalindrome(palindrome);
            //PlindromeStore.AddPalindrome(palindrome);
            return palindrome;
        }

        public string[] GelAllPalindromes()
        {
            var palindromList = _palindromeDbService.GetAllPalindromes();

            var PalindromeList = new List<string>();

            foreach (var pali in palindromList)
            {
                PalindromeList.Add(pali.Text);
            }

            return PalindromeList.ToArray();

            //return PlindromeStore.GetAllPalindromes();
        }
    }
}
