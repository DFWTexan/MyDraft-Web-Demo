using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDraftAPI.Models.Dtos
{
    public class ApiNewsItemDTO
    {
        public int NewsId { get; set; }
        public string Source { get; set; }
        public DateTime Updated { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public int? PlayerId { get; set; }
        public string PlayerName { get; set; }
        public string Team { get; set; }
        public string FullName { get; set; }
        public string Position { get; set; }
    }
}
