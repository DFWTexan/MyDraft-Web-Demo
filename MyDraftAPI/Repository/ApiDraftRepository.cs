using MyDraftAPI.Data;
using MyDraftAPI.Models;
using MyDraftAPI.Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace MyDraftAPI.Repository
{
    public class ApiDraftRepository : IApiDraftRepository    {
        private readonly Num5dataContext _db;
        public ApiDraftRepository(Num5dataContext db)
        {
            _db = db;
        }

        public bool CreateDraftPick(UserDraftSelections userDraftSelections)
        {
            _db.UserDraftSelections.Add(userDraftSelections);
            return Save();
        }

        public bool DeleteDraftPick(UserDraftSelections userDraftSelections)
        {
            _db.UserDraftSelections.Remove(userDraftSelections);
            return Save();
        }

        public bool Save()
        {
            return _db.SaveChanges() >= 0 ? true : false;
        }
    }
}
