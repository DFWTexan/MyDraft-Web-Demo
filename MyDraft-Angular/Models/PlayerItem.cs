using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDraft_Angular.Models
{
    public class PlayerItem
    {
        public int? playerId { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string teamAbbr { get; set; }
        public string position { get; set; }
        public string playerName { get; set; }
        public String photoURL { get; set; }
        public double AAVStandard { get; set; }
        public int byeWeek { get; set; }
        public bool isRookie { get; set; }
        public bool isHasNews { get; set; }
        public bool isHasInjury { get; set; }
        public int age { get; set; }
    }
}
