using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    public partial class User
    {
        public User()
        {
            UserLeague = new HashSet<UserLeague>();
        }

        [Key]
        [Column("UserID")]
        public int UserId { get; set; }
        [Required]
        [StringLength(50)]
        public string Email { get; set; }
        [Required]
        [StringLength(10)]
        public string Password { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<UserLeague> UserLeague { get; set; }
    }
}
