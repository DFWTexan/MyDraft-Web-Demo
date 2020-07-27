using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDraftAPI.Models.Dtos
{
    public class ApiUserDraftSelectionsDTO
    {
        public int UserDraftSelectionsId { get; set; }
        public int LeagueId { get; set; }
        public int Overall { get; set; }
        public int PlayerId { get; set; }
        public int TeamId { get; set; }
        public double? AuctionValue { get; set; }
        public DateTime CreateDate { get; set; }
        public bool IsKeeper { get; set; }
        public int Round { get; set; }
        public int PickInRound { get; set; }
    }
}
