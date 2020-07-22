using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyDraftAPI.Models;
using MyDraftAPI.Models.Dtos;
using MyDraftAPI.Repository.IRepository;

namespace MyDraftAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public class LeagueController : ControllerBase
    {
        private readonly IApiUserLeagueRepository  _userLeagueRepo;
        private readonly IMapper _mapper;

        public LeagueController(IApiUserLeagueRepository userLeagueRepo, IMapper mapper)
        {
            _userLeagueRepo = userLeagueRepo;
            _mapper = mapper;
        }

        /// <summary>
        /// Get the user active league.
        /// </summary>
        /// <param name="userID"> The id of the user </param>
        /// <returns></returns>
        [HttpGet("[action]/{userID:int}", Name = "GetActiveLeague")]
        [ProducesResponseType(200, Type = typeof(UserLeague))]
        [ProducesResponseType(404)]
        [ProducesDefaultResponseType]
        public IActionResult GetActiveLeague(int userID)
        {
            var obj = _userLeagueRepo.GetActiveLeague(userID);
            if (obj == null)
            {
                return NotFound();
            }
            var objDto = _mapper.Map<UserLeague>(obj);
            
            return Ok(objDto);
        }

        /// <summary>
        /// Get Active User League and List of User Leagues.
        /// </summary>
        /// <param name="userID"> The User ID.</param>
        /// <returns></returns>
        [HttpGet("{userID:int}")]
        [ProducesResponseType(200, Type = typeof(List<UserLeague>))]
        public IActionResult GetUserLeagues(int userID)
        {
            var objList = _userLeagueRepo.GetApiUserLeagues(userID);

            var objDto = new List<ApiUserLeaguesDTO>();
            foreach (var obj in objList)
            {
                objDto.Add(_mapper.Map<ApiUserLeaguesDTO>(obj));
            }

            return Ok(objDto);
        }

        /// <summary>
        /// Set Users active League.
        /// </summary>
        /// <param name="apiUserLeaguesDTO"></param>
        /// <returns></returns>
        [HttpPatch("[action]", Name = "SetActive")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult SetActive([FromBody] ApiUserLeaguesDTO apiUserLeaguesDTO)
        {
            if (apiUserLeaguesDTO == null)
            {
                return BadRequest(ModelState);
            }

            var leaguekObj = _mapper.Map<UserLeague>(apiUserLeaguesDTO);
            if (!_userLeagueRepo.SetActiveLeague(leaguekObj))
            {
                ModelState.AddModelError("", $"Something went wrong when updating the record {leaguekObj.Name}");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }
    }
}
