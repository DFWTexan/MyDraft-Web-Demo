using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace MyDraft_Angular.Models
{
    public class Player
    {
        [Key]
        public int playerId { get; set; }
        public String firstName { get; set; }
        public String lastName { get; set; }
        public String teamAbbr { get; set; }
        public DateTime birthDate { get; set; }
        public int age { get; set; }
        //public int experience { get; set; } = 0;
        public String position { get; set; }
        public int weight{ get; set; }
        public String height { get; set; }
        public String college { get; set; }
        public String photoUrl { get; set; }
    }
}
