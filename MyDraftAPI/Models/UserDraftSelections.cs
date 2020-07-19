using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    public partial class UserDraftSelections
    {
        [Key]
        [Column("UserDraftSelectionsID")]
        public int UserDraftSelectionsId { get; set; }
        [Column("LeagueID")]
        public int LeagueId { get; set; }
        public int Overall { get; set; }
        [Column("PlayerID")]
        public int PlayerId { get; set; }
        [Column("TeamID")]
        public int TeamId { get; set; }
        public double? AuctionValue { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime CreateDate { get; set; }
        public bool IsKeeper { get; set; }
        public int Round { get; set; }
        public int PickInRound { get; set; }

        [ForeignKey(nameof(LeagueId))]
        [InverseProperty(nameof(UserLeague.UserDraftSelections))]
        public virtual UserLeague League { get; set; }
        [ForeignKey(nameof(PlayerId))]
        [InverseProperty(nameof(Players.UserDraftSelections))]
        public virtual Players Player { get; set; }
    }
}
