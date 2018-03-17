namespace Palindrome.Api.Services.Contracts
{
    public interface IPalindromeService
    {
        string[] GelAllPalindromes();

        string CreatePalindrome(string palindrome);
    }
}
