using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("stageFantasyDefenseSeason")]
    public partial class StageFantasyDefenseSeason
    {
        [Column("PlayerID")]
        public int PlayerId { get; set; }
        public int SeasonType { get; set; }
        public int? Season { get; set; }
        [StringLength(5)]
        public string TeamAbbr { get; set; }
        public double? PointsAllowed { get; set; }
        public double? TouchdownsScored { get; set; }
        public double? Sacks { get; set; }
        public double? SackYards { get; set; }
        public double? FumblesForced { get; set; }
        public double? FumblesRecovered { get; set; }
        public double? FumbleReturnYards { get; set; }
        public double? FumbleReturnTouchdowns { get; set; }
        public double? Interceptions { get; set; }
        public double? InterceptionReturnTouchdowns { get; set; }
        public double? BlockedKicks { get; set; }
        public double? Safeties { get; set; }
        public double? PuntReturnTouchdowns { get; set; }
        public double? KickReturnTouchdowns { get; set; }
        public double? BlockedKickReturnTouchdowns { get; set; }
        public double? FantasyPointsAllowed { get; set; }
        public double? QuarterbackFantasyPointsAllowed { get; set; }
        public double? RunningbackFantasyPointsAllowed { get; set; }
        public double? WideReceiverFantasyPointsAllowed { get; set; }
        public double? TightEndFantasyPointsAllowed { get; set; }
        public double? KickerFantasyPointsAllowed { get; set; }
        public double? DefensiveTouchdowns { get; set; }
        public double? SpecialTeamsTouchdowns { get; set; }
        public double? FantasyPoints { get; set; }
        public double? AuctionValue { get; set; }
        [Column("AuctionValuePPR")]
        public double? AuctionValuePpr { get; set; }
        public double? AverageDraftPosition { get; set; }
        [Column("AverageDraftPositionPPR")]
        public double? AverageDraftPositionPpr { get; set; }
        [Column("TeamID")]
        public int? TeamId { get; set; }
        public double? OffensiveYardsAllowed { get; set; }
    }
}
