using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("appDB_ProjectionsSeason")]
    public partial class AppDbProjectionsSeason
    {
        [Column("player_id")]
        public int PlayerId { get; set; }
        [Column("stat_id")]
        public int StatId { get; set; }
        [Column("year")]
        public int? Year { get; set; }
        [Column("stat_value")]
        public double? StatValue { get; set; }
        [Column("uid")]
        public int? Uid { get; set; }
    }
}
