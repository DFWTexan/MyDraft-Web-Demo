using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("stageFantasyDefenseGameProjection")]
    public partial class StageFantasyDefenseGameProjection
    {
        [Required]
        [Column("GameID")]
        [StringLength(10)]
        public string GameId { get; set; }
        public int SeasonType { get; set; }
        public int Season { get; set; }
        public int? Week { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? Date { get; set; }
        [StringLength(3)]
        public string TeamAbbr { get; set; }
        [StringLength(3)]
        public string OpponentAbbr { get; set; }
        public double PointsAllowed { get; set; }
        public double TouchdownsScored { get; set; }
        public double Sacks { get; set; }
        public double FumblesForced { get; set; }
        public double FumblesRecovered { get; set; }
        public double FumbleReturnTouchdowns { get; set; }
        public double Interceptions { get; set; }
        public double InterceptionReturnTouchdowns { get; set; }
        public double BlockedKicks { get; set; }
        public double Safeties { get; set; }
        public double PuntReturnTouchdowns { get; set; }
        public double KickReturnTouchdowns { get; set; }
        public double? FantasyPointsAllowed { get; set; }
        public double? QuarterbackFantasyPointsAllowed { get; set; }
        public double? RunningbackFantasyPointsAllowed { get; set; }
        public double? WideReceiverFantasyPointsAllowed { get; set; }
        public double? TightEndFantasyPointsAllowed { get; set; }
        public double? KickerFantasyPointsAllowed { get; set; }
        public double? DefensiveTouchdowns { get; set; }
        public double? SpecialTeamsTouchdowns { get; set; }
        public double? FantasyPoints { get; set; }
        public double? FantasyPointsFanDuel { get; set; }
        public double? FantasyPointsDraftKings { get; set; }
        public double? OffensiveYardsAllowed { get; set; }
        public double? FantasyPointsYahoo { get; set; }
        [StringLength(4)]
        public string HomeOrAway { get; set; }
        public int? OpponentRank { get; set; }
        [Column("OpponentPositionRank ")]
        public int? OpponentPositionRank { get; set; }
        [Column("UpdateID")]
        public int? UpdateId { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreateDate { get; set; }
    }
}
