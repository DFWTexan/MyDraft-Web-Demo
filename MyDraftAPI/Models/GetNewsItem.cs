using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyDraftAPI.Models
{
    public class GetNewsItem
    {
        [Key]
        public int NewsId { get; set; }
        public string Source { get; set; }
        public DateTime Updated { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Url { get; set; }
        public string TermsOfUse { get; set; }
        public string Author { get; set; }
        public string Categories { get; set; }
        public int? TeamId { get; set; }
        public string Team { get; set; }
        public string FullName { get; set; }
        public int? PlayerId { get; set; }
        public string PlayerName { get; set; }
        public string Position { get; set; }
    }
}
