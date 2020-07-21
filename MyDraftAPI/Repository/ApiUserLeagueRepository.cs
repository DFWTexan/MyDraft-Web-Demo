using MyDraftAPI.Data;
using MyDraftAPI.Models;
using MyDraftAPI.Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDraftAPI.Repository
{
    public class ApiUserLeagueRepository : IApiUserLeagueRepository
    {
        private readonly Num5dataContext _db;
        public ApiUserLeagueRepository(Num5dataContext db)
        {
            _db = db;
        }

        public UserLeague GetActiveLeague(int userID)
        {
            return _db.UserLeague.Where(item => item.UserId == userID &&  item.ActiveFlag).FirstOrDefault();
        }

        public ICollection<UserLeague> GetApiUserLeagues(int userID)
        {
            return _db.UserLeague.Where(item => item.UserId == userID).ToList();
        }
    }
}
