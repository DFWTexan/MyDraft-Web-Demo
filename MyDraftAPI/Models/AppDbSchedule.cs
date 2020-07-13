using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("appDB_Schedule")]
    public partial class AppDbSchedule
    {
        [Column("GameID")]
        public int GameId { get; set; }
        public int Week { get; set; }
        public int? SeasonType { get; set; }
        public int Season { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime GameDate { get; set; }
        [StringLength(5)]
        public string AwayTeam { get; set; }
        [StringLength(5)]
        public string HomeTeam { get; set; }
    }
}
