using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("sptTbl_StatMap")]
    public partial class SptTblStatMap
    {
        [Key]
        [Column("stat_id")]
        public int StatId { get; set; }
        [Column("name")]
        [StringLength(100)]
        public string Name { get; set; }
        [Column("stat_key")]
        [StringLength(50)]
        public string StatKey { get; set; }
        [Column("projection_key", TypeName = "text")]
        public string ProjectionKey { get; set; }
        [Column("uid")]
        public double? Uid { get; set; }
        [Column("type_value", TypeName = "text")]
        public string TypeValue { get; set; }
    }
}
