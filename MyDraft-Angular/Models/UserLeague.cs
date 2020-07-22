using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDraft_Angular.Models
{
    public class UserLeague
    {
        public int leagueId { get; set; }
        public int userId { get; set; }
        public string name { get; set; }
        public string abbr { get; set; }
        public int mode { get; set; }
        public int draftType { get; set; }
        public string draftOrder { get; set; }
        public int numberTeams { get; set; }
        public int numberRounds { get; set; }
        public int myTeamId { get; set; }
        public bool activeFlag { get; set; }
    }
}
