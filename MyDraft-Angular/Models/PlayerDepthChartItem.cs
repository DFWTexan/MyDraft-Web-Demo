using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDraft_Angular.Models
{
    public class PlayerDepthChartItem
    {
        public int playerId { get; set; }
        public string pos { get; set; }
        public string playerName { get; set; }
        public double stat_1 { get; set; }
        public double stat_2 { get; set; }
        public double stat_3 { get; set; }
        public double points { get; set; }
    }
}
