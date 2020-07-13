using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("sptTbl_Players")]
    public partial class SptTblPlayers
    {
        [Column("player_id", TypeName = "text")]
        public string PlayerId { get; set; }
        [Column("first_name", TypeName = "text")]
        public string FirstName { get; set; }
        [Column("last_name", TypeName = "text")]
        public string LastName { get; set; }
        [Column("team_abbr", TypeName = "text")]
        public string TeamAbbr { get; set; }
        [Column("birthdate", TypeName = "date")]
        public DateTime? Birthdate { get; set; }
        [Column("experience")]
        public int? Experience { get; set; }
        [Column("position", TypeName = "text")]
        public string Position { get; set; }
        [Column("positiongroup", TypeName = "text")]
        public string Positiongroup { get; set; }
        [Column("contract_year")]
        public int? ContractYear { get; set; }
        [Column("weight")]
        public int? Weight { get; set; }
        [Column("height")]
        public int? Height { get; set; }
        [Column("jersey")]
        public int? Jersey { get; set; }
        [Column("college", TypeName = "text")]
        public string College { get; set; }
        [Column("is_rookie")]
        public bool? IsRookie { get; set; }
        [Column("photo_url", TypeName = "text")]
        public string PhotoUrl { get; set; }
        [Column("draft_year")]
        public int? DraftYear { get; set; }
        [Column("draft_pick")]
        public int? DraftPick { get; set; }
        [Column("draft_round")]
        public int? DraftRound { get; set; }
        [Column("status", TypeName = "text")]
        public string Status { get; set; }
        [Column("teamseq")]
        public int? Teamseq { get; set; }
        [Column("uid")]
        public int? Uid { get; set; }
        [Column("collegeid")]
        public int? Collegeid { get; set; }
        [Column("timestamp")]
        public double? Timestamp { get; set; }
        [Column("hometown", TypeName = "text")]
        public string Hometown { get; set; }
        [Column("positioncategory")]
        public double? Positioncategory { get; set; }
        [Column("team")]
        public double? Team { get; set; }
        [Column("photourl")]
        public double? Photourl1 { get; set; }
        [Column("teamid")]
        public double? Teamid { get; set; }
    }
}
