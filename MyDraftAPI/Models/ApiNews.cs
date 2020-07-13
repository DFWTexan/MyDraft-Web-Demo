using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("api_News")]
    public partial class ApiNews
    {
        [Column("NewsID")]
        public int? NewsId { get; set; }
        [StringLength(50)]
        public string Source { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? PubDate { get; set; }
        [StringLength(50)]
        public string TimeAgo { get; set; }
        [StringLength(250)]
        public string Title { get; set; }
        public string Content { get; set; }
        [StringLength(250)]
        public string NewsUrl { get; set; }
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
        [StringLength(5)]
        public string Team { get; set; }
        [Column("UID")]
        public int? Uid { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreateDate { get; set; }
    }
}
