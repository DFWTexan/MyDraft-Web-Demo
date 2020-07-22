using MyDraftAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDraftAPI.Repository.IRepository
{
    public interface IApiUserLeagueRepository
    {
        ICollection<UserLeague> GetApiUserLeagues(int userID);
        UserLeague GetActiveLeague(int userID);
        bool SetActiveLeague(UserLeague league);
    }
}
