using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    public partial class UserLeague
    {
        public UserLeague()
        {
            UserDraftSelections = new HashSet<UserDraftSelections>();
        }

        [Key]
        [Column("LeagueID")]
        public int LeagueId { get; set; }
        [Column("UserID")]
        public int UserId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Abbr { get; set; }
        public int Mode { get; set; }
        public int DraftType { get; set; }
        [Required]
        public string DraftOrder { get; set; }
        public int NumberTeams { get; set; }
        public int NumberRounds { get; set; }
        [Column("MyTeamID")]
        public int MyTeamId { get; set; }
        public bool ActiveFlag { get; set; }

        [ForeignKey(nameof(UserId))]
        [InverseProperty("UserLeague")]
        public virtual User User { get; set; }
        [InverseProperty("League")]
        public virtual ICollection<UserDraftSelections> UserDraftSelections { get; set; }
    }
}
