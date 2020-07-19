using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDraftAPI.Models.Dtos
{
    public class ApiUserLeaguesDTO
    {
        public int LeagueId { get; set; }
        public string Name { get; set; }
        public string Abbr { get; set; }
        public int Mode { get; set; }
        public int DraftType { get; set; }
        public string DraftOrder { get; set; }
        public int NumberTeams { get; set; }
        public int NumberRounds { get; set; }
        public int MyTeamId { get; set; }
        public bool ActiveFlag { get; set; }
    }
}
