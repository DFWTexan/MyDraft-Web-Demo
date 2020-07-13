using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyDraftAPI.Models
{
    public class GetPlayerDepthChartItem
    {
        [Key]
        public int PlayerID { get; set; }
        public string Pos { get; set; }
        public string PlayerName { get; set; }
        public double Stat_1 { get; set; }
        public double Stat_2 { get; set; }
        public double Stat_3 { get; set; }
        public double Points { get; set; }
    }
}
