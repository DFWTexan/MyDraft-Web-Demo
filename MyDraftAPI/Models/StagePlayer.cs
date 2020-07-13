using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("stagePlayer")]
    public partial class StagePlayer
    {
        [Column("PlayerID")]
        public int PlayerId { get; set; }
        [StringLength(5)]
        public string TeamAbbr { get; set; }
        [StringLength(50)]
        public string FirstName { get; set; }
        [StringLength(50)]
        public string LastName { get; set; }
        [StringLength(10)]
        public string Position { get; set; }
        [StringLength(50)]
        public string Status { get; set; }
        [StringLength(50)]
        public string Height { get; set; }
        public int? Weight { get; set; }
        [Column(TypeName = "date")]
        public DateTime? Birthdate { get; set; }
        [StringLength(50)]
        public string College { get; set; }
        public int? Experience { get; set; }
        public bool? Active { get; set; }
        [StringLength(3)]
        public string PositionCategory { get; set; }
        [StringLength(50)]
        public string FullName { get; set; }
        public int? Age { get; set; }
        [StringLength(50)]
        public string ExperienceString { get; set; }
        [StringLength(50)]
        public string BirthDateString { get; set; }
        [Column("PhotoURL")]
        [StringLength(250)]
        public string PhotoUrl { get; set; }
        public int? ByeWeek { get; set; }
        [StringLength(50)]
        public string ShortName { get; set; }
        public double? AverageDraftPosition { get; set; }
        [StringLength(3)]
        public string DepthPositionCategory { get; set; }
        [StringLength(10)]
        public string DepthPosition { get; set; }
        public int? DeptOrder { get; set; }
        public int? DepthDisplayOrder { get; set; }
        [Column("HeightFeet ")]
        public int? HeightFeet { get; set; }
        [Column("HeightInches ")]
        public int? HeightInches { get; set; }
        [Column("CurrentStatus ")]
        [StringLength(50)]
        public string CurrentStatus { get; set; }
        [Column("FantasyAlarmPlayerID ")]
        public int? FantasyAlarmPlayerId { get; set; }
        [Column("RotoworldPlayerID ")]
        public int? RotoworldPlayerId { get; set; }
        [Column("RotoWirePlayerID")]
        public int? RotoWirePlayerId { get; set; }
        [Column("StatsPlayerID ")]
        public int? StatsPlayerId { get; set; }
        [Column("SportsDirectPlayerID ")]
        public int? SportsDirectPlayerId { get; set; }
        [Column("XmlTeamPlayerID ")]
        public int? XmlTeamPlayerId { get; set; }
        [Column("FanDuelPlayerID ")]
        public int? FanDuelPlayerId { get; set; }
        [Column("DraftKingsPlayerID ")]
        public int? DraftKingsPlayerId { get; set; }
        [Column("YahooPlayerID ")]
        public int? YahooPlayerId { get; set; }
        [Column("UpdateID")]
        public int UpdateId { get; set; }
    }
}
