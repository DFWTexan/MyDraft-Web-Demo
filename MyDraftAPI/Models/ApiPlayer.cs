using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("api_Player")]
    public partial class ApiPlayer
    {
        [Column("PlayerID")]
        public int? PlayerId { get; set; }
        [StringLength(50)]
        public string FirstName { get; set; }
        [StringLength(50)]
        public string LastName { get; set; }
        [StringLength(5)]
        public string TeamAbbr { get; set; }
        [Column(TypeName = "date")]
        public DateTime? BirthDate { get; set; }
        public int? Experience { get; set; }
        [StringLength(5)]
        public string Position { get; set; }
        public int? Weight { get; set; }
        [StringLength(10)]
        public string Height { get; set; }
        [StringLength(50)]
        public string College { get; set; }
        [Column("isRookie")]
        public bool? IsRookie { get; set; }
        [Column("PhotoURL")]
        [StringLength(250)]
        public string PhotoUrl { get; set; }
        [StringLength(30)]
        public string Status { get; set; }
        [StringLength(5)]
        public string PositionCategory { get; set; }
        [Column("UID")]
        public int? Uid { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime CreateDate { get; set; }
    }
}
