using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("api_AAV")]
    public partial class ApiAav
    {
        [Column("PlayerID")]
        public int? PlayerId { get; set; }
        public double? ValueStandard { get; set; }
        [Column("ValuePPR")]
        public double? ValuePpr { get; set; }
        [Column("UID")]
        public int? Uid { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreateDate { get; set; }
    }
}
