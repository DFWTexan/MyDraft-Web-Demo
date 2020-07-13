using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDraft_Angular.Models
{
    public class NewsItem
    {
        public int newsId { get; set; }
        public string source { get; set; }
        public DateTime updated { get; set; }
        public string title { get; set; }
        public string content { get; set; }
        public string url { get; set; }
        public string termsOfUse { get; set; }
        public string author { get; set; }
        public string categories { get; set; }
        public int? teamId { get; set; }
        public string team { get; set; }
        public string fullName { get; set; }
        public int? playerId { get; set; }
        public string playerName { get; set; }
        public string position { get; set; }
    }
}
