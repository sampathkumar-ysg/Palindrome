using System.Collections.Generic;
using System.Linq;

namespace Palindrome.Api.Services
{
    public static class PlindromeStore
    {
        private static readonly List<string> _palindromes;

        static PlindromeStore()
        {
            _palindromes = new List<string>();
        }

        public static string[] GetAllPalindromes()
        {
            return _palindromes.ToArray();
        }

        public static void AddPalindrome(string palindrome)
        {
            _palindromes.Add(palindrome);
        }

        public static bool IsPlindrome(string value)
        {
            //var newText = text.Trim();
            //return newText.SequenceEqual(newText.Reverse());

            int min = 0;
            int max = value.Length - 1;
            while (true)
            {
                if (min > max)
                {
                    return true;
                }
                char a = value[min];
                char b = value[max];

                // Scan forward for a while invalid.
                while (!char.IsLetterOrDigit(a))
                {
                    min++;
                    if (min > max)
                    {
                        return true;
                    }
                    a = value[min];
                }

                // Scan backward for b while invalid.
                while (!char.IsLetterOrDigit(b))
                {
                    max--;
                    if (min > max)
                    {
                        return true;
                    }
                    b = value[max];
                }

                if (char.ToLower(a) != char.ToLower(b))
                {
                    return false;
                }
                min++;
                max--;
            }
        }
    }
}
