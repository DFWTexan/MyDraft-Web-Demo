using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyDraft_Angular.Models;
using MyDraft_Angular.Repository.IRepository;

namespace MyDraft_Angular.Controllers
{
    //[Produces("applicatoin/json")]
    //[Route("api/[controller]")]
    [Route("api/MyDraftData")]
    public class MyDraftDataController : Controller
    {
        private readonly IHttpClientFactory _clientFactory;
        private readonly ILeagueRepository _lrepo;

        public IEnumerable<PlayerItem> PullPlayerRequests { get; private set; }
        public IEnumerable<PlayerDepthChartItem> PullPlayerDepthChartRequests { get; private set; }
        public IEnumerable<NewsItem> PullNewsRequests { get; private set; }
        public IEnumerable<UserLeague> PullLeaguesRequests { get; private set; }
        public bool GetPullRequestsError { get; private set; }

        public MyDraftDataController(IHttpClientFactory clientFactory, ILeagueRepository lrepo)
        {
            _clientFactory = clientFactory;
            _lrepo = lrepo;
        }

        // GET: api/MyDraftData
        [HttpGet]
        public async Task<IEnumerable<PlayerItem>> GetPlayers()
        {
            var request = new HttpRequestMessage(HttpMethod.Get, "api/Players");

            var client = _clientFactory.CreateClient("myDraftData");

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode) {
                using var responseStream = await response.Content.ReadAsStreamAsync();
                PullPlayerRequests = await JsonSerializer.DeserializeAsync<IEnumerable<PlayerItem>>(responseStream);
            } else {
                GetPullRequestsError = true;
                PullPlayerRequests = Array.Empty<PlayerItem>();
            }

            return PullPlayerRequests;
        }

        // GET: api/MyDraftData/5
        [HttpGet("{playerId}")]
        public async Task<IActionResult> GetPlayers([FromRoute] int playerId)
        {
            //Player player = new Player();
            var request = new HttpRequestMessage(HttpMethod.Get, "api/Players/" + playerId);

            var client = _clientFactory.CreateClient("myDraftData");

            var response = await client.SendAsync(request);

            if (!response.IsSuccessStatusCode)
            {
                return NotFound();
            }
            
            var responseStream = await response.Content.ReadAsStreamAsync();
            var player = await JsonSerializer.DeserializeAsync<Player>(responseStream);

            return Ok(player);
        }

        // GET: api/MyDraftData/SearchPlayers
        [HttpGet("SearchPlayers")]
        public async Task<IEnumerable<PlayerItem>> SearchPlayers([FromQuery] PlayerFilter filter)
        {
            var request = new HttpRequestMessage(HttpMethod.Get, "api/mydraftdata/PlayerSearch?name=" + filter.name);

            var client = _clientFactory.CreateClient("myDraftData");

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                using var responseStream = await response.Content.ReadAsStreamAsync();
                PullPlayerRequests = await JsonSerializer.DeserializeAsync
                        <IEnumerable<PlayerItem>>(responseStream);
            }
            else
            {
                GetPullRequestsError = true;
                PullPlayerRequests = Array.Empty<PlayerItem>();
            }

            return PullPlayerRequests;
        }


        // GET: api/MyDraftData/GetPlayerDepthChart/QB/DAL
        [HttpGet("[action]/{position}/{teamAbbr}", Name = "GetPlayerDepthChart")]
        public async Task<IEnumerable<PlayerDepthChartItem>> GetPlayerDepthChart([FromRoute] string position, string teamAbbr)
        {
            var request = new HttpRequestMessage(HttpMethod.Get, "api/Players/GetApiPlayerDepthChart/" + position +"/"+ teamAbbr);

            var client = _clientFactory.CreateClient("myDraftData");

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                using var responseStream = await response.Content.ReadAsStreamAsync();
                PullPlayerDepthChartRequests = await JsonSerializer.DeserializeAsync<IEnumerable<PlayerDepthChartItem>>(responseStream);
            }
            else
            {
                GetPullRequestsError = true;
                PullPlayerDepthChartRequests = Array.Empty<PlayerDepthChartItem>();
            }

            return PullPlayerDepthChartRequests;
        }

        //----------------------- NEWS ----------------------------//

        // GET: api/MyDraftData/GetNews
        [HttpGet("[action]", Name = "GetNews")]
        public async Task<IEnumerable<NewsItem>> GetNews()
        {
            var request = new HttpRequestMessage(HttpMethod.Get, "api/News");

            var client = _clientFactory.CreateClient("myDraftData");

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                using var responseStream = await response.Content.ReadAsStreamAsync();
                PullNewsRequests = await JsonSerializer.DeserializeAsync<IEnumerable<NewsItem>>(responseStream);
            }
            else
            {
                GetPullRequestsError = true;
                PullNewsRequests = Array.Empty<NewsItem>();
            }

            return PullNewsRequests;
        }

        // GET: api/MyDraftData/GetPlayerNews/5
        [HttpGet("[action]/{playerId:int}", Name = "GetPlayerNews")]
        public async Task<IEnumerable<NewsItem>> GetPlayerNews([FromRoute] int playerId)
        {
            var request = new HttpRequestMessage(HttpMethod.Get, "api/News/" + playerId);

            var client = _clientFactory.CreateClient("myDraftData");

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                using var responseStream = await response.Content.ReadAsStreamAsync();
                PullNewsRequests = await JsonSerializer.DeserializeAsync<IEnumerable<NewsItem>>(responseStream);
            }
            else
            {
                GetPullRequestsError = true;
                PullNewsRequests = Array.Empty<NewsItem>();
            }

            return PullNewsRequests;
        }

        //----------------------- LEAGUE ----------------------------//
        // GET: api/MyDraftData/GetUserLeagues/5
        [HttpGet("[action]/{userID:int}", Name = "GetUserLeagues")]
        public async Task<IEnumerable<UserLeague>> GetUserLeagues([FromRoute] int userID)
        {
            var request = new HttpRequestMessage(HttpMethod.Get, "api/League/" + userID);

            var client = _clientFactory.CreateClient("myDraftData");

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                using var responseStream = await response.Content.ReadAsStreamAsync();
                PullLeaguesRequests = await JsonSerializer.DeserializeAsync<IEnumerable<UserLeague>>(responseStream);
            }
            else
            {
                GetPullRequestsError = true;
                PullLeaguesRequests = Array.Empty<UserLeague>();
            }

            return PullLeaguesRequests;
        }

        //PUT: api/MyDraftData/SetActiveLeague/
        [HttpPatch("[action]")]
        public async Task<bool> SetActiveLeague([FromBody] UserLeague league)
        {
            var status = await _lrepo.UpdateAsync(ApiHelper.LeagueApiSetActivePath, league);
            if (status)
            {
                return true;
            }
            return false;
        }








        // POST: api/MyDraftData
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
