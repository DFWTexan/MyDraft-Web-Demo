using Microsoft.EntityFrameworkCore;
using MyDraftAPI.Data;
using MyDraftAPI.Models;
using MyDraftAPI.Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDraftAPI.Repository
{
    public class ApiPlayerRepository : IApiPlayer
    {
        private readonly Num5dataContext _db;
        public ApiPlayerRepository(Num5dataContext db)
        {
            _db = db;
        }

        public ICollection<GetPlayerItem> GetApiPlayers()
        {
            ICollection<GetPlayerItem> getPlayers;
            getPlayers = _db.GetPlayerItem
                   .FromSqlRaw("myDraftDataPlayers")
                   .ToList();

            return getPlayers;
        }

        public ICollection<GetPlayerDepthChartItem> GetApiPlayersDepthChart(string position, string teamAbbr)
        {
            ICollection<GetPlayerDepthChartItem> getPlayerDepthChart;
            getPlayerDepthChart = _db.GetPlayerDepthChartItem
                   .FromSqlRaw($"MyDraftPlayerDepthChart '{position}', '{teamAbbr}'")
                   .ToList();

            return getPlayerDepthChart;
        }
    }
}
