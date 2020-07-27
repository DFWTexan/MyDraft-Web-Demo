using MyDraftAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDraftAPI.Repository.IRepository
{
    public interface IApiDraftRepository
    {
        bool CreateDraftPick(UserDraftSelections userDraftSelections);
        bool DeleteDraftPick(UserDraftSelections userDraftSelections);
    }
}
