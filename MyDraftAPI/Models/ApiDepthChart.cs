using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("api_DepthChart")]
    public partial class ApiDepthChart
    {
        [Column("PlayerID")]
        public int PlayerId { get; set; }
        [StringLength(5)]
        public string Position { get; set; }
        public int? Rank { get; set; }
        [StringLength(3)]
        public string TeamAbbr { get; set; }
        [Column("UID")]
        public int? Uid { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreateDate { get; set; }
    }
}
