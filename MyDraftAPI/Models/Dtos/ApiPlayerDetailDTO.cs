using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDraftAPI.Models.Dtos
{
    public class ApiPlayerDetailDTO
    {
        public int? playerId { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string teamAbbr { get; set; }
        public DateTime birthDate { get; set; }
        public int Age
        {
            get
            {
                DateTime today = DateTime.Today;
                int age = today.Year - birthDate.Year;
                if (birthDate > today.AddYears(-age)) age--;
                return age;
            }
        }
        public int? experience { get; set; }
        public string position { get; set; }
        public int? weight { get; set; }
        public string height { get; set; }
        public string college { get; set; }
        public string photoUrl { get; set; }
    }
}
