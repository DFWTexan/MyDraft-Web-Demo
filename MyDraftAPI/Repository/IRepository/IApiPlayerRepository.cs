using MyDraftAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDraftAPI.Repository.IRepository
{
    public interface IApiPlayerRepository
    {
        ICollection<GetPlayerItem> GetApiPlayers();
        ICollection<GetPlayerDepthChartItem> GetApiPlayersDepthChart(string position, string teamAbbr);
    }
}
