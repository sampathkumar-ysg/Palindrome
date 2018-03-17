using Microsoft.EntityFrameworkCore;
using Palindrome.Api.DBContext;
using System.Collections.Generic;

namespace Palindrome.Api.DBService
{
    public interface IPalindromeDbService
    {
        void AddPalindrome(string palindrome);

        IEnumerable<PalindromeTable> GetAllPalindromes();
    }

    public class PalindromeDbService : IPalindromeDbService
    {
        private readonly PalindromeDbContext _palindromeDbContext;

        public PalindromeDbService(PalindromeDbContext palindromeDbContext)
        {
            _palindromeDbContext = palindromeDbContext;
        }

        public IEnumerable<PalindromeTable> GetAllPalindromes()
        {
            return _palindromeDbContext.Palindrome.FromSql("GetAllPalindromes");
        }

        public void AddPalindrome(string palindrome)
        {
            _palindromeDbContext.Palindrome.FromSql("AddPalindrome @p0", palindrome).FirstOrDefaultAsync();
        }
    }
}
