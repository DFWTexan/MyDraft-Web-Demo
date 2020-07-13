using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("stageTeam")]
    public partial class StageTeam
    {
        [Column("TeamID")]
        public int TeamId { get; set; }
        [Column("PlayerID")]
        public int? PlayerId { get; set; }
        [Required]
        [Column("AbbrID")]
        [StringLength(3)]
        public string AbbrId { get; set; }
        [Required]
        [StringLength(50)]
        public string City { get; set; }
        [Required]
        [StringLength(50)]
        public string MascotName { get; set; }
        [StringLength(5)]
        public string Conference { get; set; }
        [StringLength(50)]
        public string Division { get; set; }
        [StringLength(75)]
        public string FullName { get; set; }
        [Column("StadiumID")]
        public int? StadiumId { get; set; }
        public int? ByeWeek { get; set; }
        public double? AverageDraftPosition { get; set; }
        [Column("AverageDraftPositionPPR")]
        public double? AverageDraftPositionPpr { get; set; }
    }
}
