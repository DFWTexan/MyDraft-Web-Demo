using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Principal;
using System.Threading.Tasks;

namespace MyDraftAPI.Models
{
    public class GetPlayerItem
    {
        [Key]
        public int? playerId { get; set; }
        public string playerName { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string teamAbbr { get; set; }
        public DateTime birthDate { get; set; }
        public int experience { get; set; }
        public string position { get; set; }
        public int weight { get; set; }
        public string height { get; set; }
        public string college { get; set; }
        public String photoURL { get; set; }
        public int byeWeek { get; set; }
        public double AAVStandard { get; set; }
        public bool isRookie { get; set; }
        public bool isHasNews { get; set; }
        public bool isHasInjury { get; set; }
    }
}
