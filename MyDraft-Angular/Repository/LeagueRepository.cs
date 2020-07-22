using MyDraft_Angular.Models;
using MyDraft_Angular.Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace MyDraft_Angular.Repository
{
    public class LeagueRepository  : Repository<UserLeague>, ILeagueRepository
    {
        private readonly IHttpClientFactory _clientFactory;

        public LeagueRepository(IHttpClientFactory clientFactory) : base(clientFactory)
        {
            _clientFactory = clientFactory;
        }
    }
}
