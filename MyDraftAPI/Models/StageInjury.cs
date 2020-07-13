using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("stageInjury")]
    public partial class StageInjury
    {
        [Key]
        [Column("InjuryID")]
        public int InjuryId { get; set; }
        [Key]
        public int SeasonType { get; set; }
        [Key]
        public int Season { get; set; }
        [Key]
        public int Week { get; set; }
        [Key]
        [Column("PlayerID")]
        public int PlayerId { get; set; }
        [StringLength(50)]
        public string BodyPart { get; set; }
        [StringLength(50)]
        public string Status { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime Updated { get; set; }
        public bool? DeclaredInactive { get; set; }
        [StringLength(50)]
        public string PracticeParticipation { get; set; }
        [Column("UpdateID")]
        public int UpdateId { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreateDate { get; set; }
    }
}
