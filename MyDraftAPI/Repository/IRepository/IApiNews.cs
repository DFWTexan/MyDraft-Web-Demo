using MyDraftAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDraftAPI.Repository.IRepository
{
    interface IApiNews
    {
        ICollection<GetNewsItem> GetAllNews();
    }
}
