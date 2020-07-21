using Microsoft.EntityFrameworkCore;
using MyDraftAPI.Data;
using MyDraftAPI.Models;
using MyDraftAPI.Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace MyDraftAPI.Repository
{
    public class ApiNewsRepository : IApiNewsRepository
    {
        private readonly Num5dataContext _db;
        public ApiNewsRepository(Num5dataContext db)
        {
            _db = db;
        }

        public ICollection<GetNewsItem> GetAllNews()
        {
            ICollection<GetNewsItem> getNews;
            getNews = _db.GetNewsItem
                   .FromSqlRaw("myDraftDataNews")
                   .ToList();

            return getNews;
        }
    }
}
