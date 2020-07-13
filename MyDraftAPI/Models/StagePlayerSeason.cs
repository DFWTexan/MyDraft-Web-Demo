using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("stagePlayerSeason")]
    public partial class StagePlayerSeason
    {
        [Column("PlayerID")]
        public int PlayerId { get; set; }
        [Column("SeasonType ")]
        public int? SeasonType { get; set; }
        [Column("Season ")]
        public int? Season { get; set; }
        [StringLength(5)]
        public string TeamAbbr { get; set; }
        [StringLength(50)]
        public string FullName { get; set; }
        [StringLength(50)]
        public string Position { get; set; }
        [StringLength(50)]
        public string PositionCategory { get; set; }
        [Column("Activated ")]
        public int? Activated { get; set; }
        public int? Played { get; set; }
        public int? Started { get; set; }
        public double? PassingAttempts { get; set; }
        public double? PassingCompletions { get; set; }
        public double? PassingYards { get; set; }
        public double? PassingCompletionPercentage { get; set; }
        public double? PassingYardsPerAttempt { get; set; }
        public double? PassingYardsPerCompletion { get; set; }
        public double? PassingTouchdowns { get; set; }
        public double? PassingInterceptions { get; set; }
        public double? PassingRating { get; set; }
        public double? PassingLong { get; set; }
        public double? PassingSacks { get; set; }
        public double? PassingSackYards { get; set; }
        public double? RushingAttempts { get; set; }
        public double? RushingYards { get; set; }
        public double? RushingYardsPerAttempt { get; set; }
        public double? RushingTouchdowns { get; set; }
        public double? RushingLong { get; set; }
        public double? ReceivingTargets { get; set; }
        public double? Receptions { get; set; }
        public double? ReceivingYards { get; set; }
        public double? ReceivingYardsPerReception { get; set; }
        public double? ReceivingTouchdowns { get; set; }
        public double? ReceivingLong { get; set; }
        public double? Fumbles { get; set; }
        public double? FumblesLost { get; set; }
        public double? PuntReturns { get; set; }
        public double? PuntReturnYards { get; set; }
        public double? PuntReturnYardsPerAttempt { get; set; }
        public double? PuntReturnTouchdowns { get; set; }
        public double? PuntReturnLong { get; set; }
        public double? KickReturns { get; set; }
        public double? KickReturnYards { get; set; }
        public double? KickReturnYardsPerAttempt { get; set; }
        public double? KickReturnTouchdowns { get; set; }
        [Column("KickReturnLong ")]
        public double? KickReturnLong { get; set; }
        public double? SoloTackles { get; set; }
        public double? AssistedTackles { get; set; }
        public double? TacklesForLoss { get; set; }
        public double? Sacks { get; set; }
        public double? SackYards { get; set; }
        public double? PassesDefended { get; set; }
        public double? FumblesForced { get; set; }
        [Column("FumblesRecovered ")]
        public double? FumblesRecovered { get; set; }
        public double? FumbleReturnYards { get; set; }
        public double? FumbleReturnTouchdowns { get; set; }
        public double? Interceptions { get; set; }
        public double? InterceptionReturnYards { get; set; }
        public double? InterceptionReturnTouchdowns { get; set; }
        public double? BlockedKicks { get; set; }
        public double? SpecialTeamsSoloTackles { get; set; }
        public double? FieldGoalsAttempted { get; set; }
        public double? FieldGoalsMade { get; set; }
        public double? FieldGoalsLongestMade { get; set; }
        [Column("ExtraPointsMade ")]
        public double? ExtraPointsMade { get; set; }
        public double? TwoPointConversionPasses { get; set; }
        public double? TwoPointConversionRuns { get; set; }
        public double? TwoPointConversionReceptions { get; set; }
        public double? FantasyPoints { get; set; }
        [Column("FantasyPointsPPR")]
        public double? FantasyPointsPpr { get; set; }
        [Column("ReceptionPercentage ")]
        public double? ReceptionPercentage { get; set; }
        public double? ReceivingYardsPerTarget { get; set; }
        public double? Tackles { get; set; }
        public double? DefensiveTouchdowns { get; set; }
        public double? SpecialTeamsTouchdowns { get; set; }
        public double? Touchdowns { get; set; }
        [StringLength(50)]
        public string FantasyPosition { get; set; }
        public double? FieldGoalPercentage { get; set; }
        public double? FumblesOwnRecoveries { get; set; }
        public double? AuctionValue { get; set; }
        [Column("AuctionValuePPR")]
        public double? AuctionValuePpr { get; set; }
        public double? FantasyPointsFanDuel { get; set; }
        public double? FieldGoalsMade0to19 { get; set; }
        public double? FieldGoalsMade20to29 { get; set; }
        public double? FieldGoalsMade30to39 { get; set; }
        public double? FieldGoalsMade40to49 { get; set; }
        public double? FieldGoalsMade50Plus { get; set; }
        public double? FantasyPointsDraftKings { get; set; }
        public double? FantasyPointsYahoo { get; set; }
        public double? AverageDraftPosition { get; set; }
        [Column("AverageDraftPositionPPR")]
        public double? AverageDraftPositionPpr { get; set; }
    }
}
