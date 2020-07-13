using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("api_InjuryDelete")]
    public partial class ApiInjuryDelete
    {
        [Column("InjuryID")]
        public int? InjuryId { get; set; }
        [Column("PlayerID")]
        public int PlayerId { get; set; }
        [Column("UID")]
        public int? Uid { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreateDate { get; set; }
    }
}
