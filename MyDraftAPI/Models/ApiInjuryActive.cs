using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("api_InjuryActive")]
    public partial class ApiInjuryActive
    {
        [Column("InjuryID")]
        public int? InjuryId { get; set; }
        [Column("PlayerID")]
        public int PlayerId { get; set; }
        [StringLength(50)]
        public string InjuryStatus { get; set; }
        [StringLength(50)]
        public string InjuryType { get; set; }
        [Column("UID")]
        public int? Uid { get; set; }
    }
}
