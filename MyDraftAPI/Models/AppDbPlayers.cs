using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("appDB_Players")]
    public partial class AppDbPlayers
    {
        [Column("player_id")]
        public int? PlayerId { get; set; }
        [Column("first_name")]
        [StringLength(50)]
        public string FirstName { get; set; }
        [Column("last_name")]
        [StringLength(50)]
        public string LastName { get; set; }
        [Column("team_abbr")]
        [StringLength(5)]
        public string TeamAbbr { get; set; }
        [Column("birthdate", TypeName = "date")]
        public DateTime? Birthdate { get; set; }
        [Column("experience")]
        public int? Experience { get; set; }
        [Column("position")]
        [StringLength(5)]
        public string Position { get; set; }
        [Column("weight")]
        public int? Weight { get; set; }
        [Column("height")]
        [StringLength(6)]
        public string Height { get; set; }
        [Column("college")]
        [StringLength(50)]
        public string College { get; set; }
        [Column("photo_url")]
        [StringLength(250)]
        public string PhotoUrl { get; set; }
        [Column("status")]
        [StringLength(30)]
        public string Status { get; set; }
        [Column("positioncategory")]
        [StringLength(5)]
        public string Positioncategory { get; set; }
        [Column("uid")]
        public int? Uid { get; set; }
    }
}
