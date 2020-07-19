using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    public partial class Points
    {
        [Column("player_id")]
        public string PlayerId { get; set; }
        [Column("league_id")]
        public int? LeagueId { get; set; }
        [Column("points")]
        public double? Points1 { get; set; }
        [Column("year")]
        public int? Year { get; set; }
        [Column("segment")]
        public int? Segment { get; set; }
        [Column("tag")]
        public string Tag { get; set; }
    }
}
