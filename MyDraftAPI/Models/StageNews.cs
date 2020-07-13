using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("stageNews")]
    public partial class StageNews
    {
        [Column("NewsID")]
        public int NewsId { get; set; }
        [StringLength(50)]
        public string Source { get; set; }
        public DateTime Updated { get; set; }
        [StringLength(50)]
        public string TimeAgo { get; set; }
        [StringLength(50)]
        public string Title { get; set; }
        public string Content { get; set; }
        [StringLength(250)]
        public string Url { get; set; }
        [StringLength(50)]
        public string TermsOfUse { get; set; }
        [StringLength(50)]
        public string Author { get; set; }
        [StringLength(50)]
        public string Categories { get; set; }
        [Column("PlayerID")]
        public int? PlayerId { get; set; }
        [Column("TeamID")]
        public int? TeamId { get; set; }
        [StringLength(50)]
        public string Team { get; set; }
        [Column("UpdateID")]
        public int UpdateId { get; set; }
    }
}
