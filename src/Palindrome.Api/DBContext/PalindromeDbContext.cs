using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Palindrome.Api.DBContext
{
    public class PalindromeDbContext : DbContext
    {
        public DbSet<PalindromeTable> Palindrome { get; set; }

        public PalindromeDbContext(DbContextOptions<PalindromeDbContext> options) : base(options)
        {
            
        }
    }

    public class PalindromeTable
    {
        [Key]
        public int Id { get; set; }

        public string Text { get; set; }
    }
}
