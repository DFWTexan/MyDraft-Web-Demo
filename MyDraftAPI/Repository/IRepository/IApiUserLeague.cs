using MyDraftAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDraftAPI.Repository.IRepository
{
    public interface IApiUserLeague
    {
        ICollection<UserLeague> GetApiUserLeagues(int userID);
    }
}
