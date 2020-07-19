using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    public partial class UserLeagueTeams
    {
        [Column("UserTeamID")]
        public int UserTeamId { get; set; }
        [Column("LeagueID")]
        public int LeagueId { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        [StringLength(10)]
        public string Abbr { get; set; }
        public int DraftPosition { get; set; }

        [ForeignKey(nameof(LeagueId))]
        public virtual UserLeague League { get; set; }
    }
}
