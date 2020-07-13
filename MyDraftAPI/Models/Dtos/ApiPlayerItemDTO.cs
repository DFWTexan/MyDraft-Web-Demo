using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MyDraftAPI.Utilities;

namespace MyDraftAPI.Models.Dtos
{
    public partial class ApiPlayerItemDTO
    {
        public int? PlayerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string TeamAbbr { get; set; }
        public string Position { get; set; }
        public string PlayerName
        {
            get
            {
                return this.FirstName + ' ' + this.LastName;
            }
        }
        public String photoURL
        {
            get
            {
                return ApiUtility.transparentPlayerImageURLForPlayerID(this.PlayerId.ToString());
            }
        }
        public double AAVStandard { get; set; }
        public int ByeWeek { get; set; }
        public bool? isRookie { get; set; }
        public bool? isHasNews { get; set; }
        public bool? isHasInjury { get; set; }
    }
}
