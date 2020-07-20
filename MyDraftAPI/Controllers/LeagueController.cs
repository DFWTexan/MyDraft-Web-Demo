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
        private readonly IApiUserLeague  _userRepo;
        private readonly IMapper _mapper;

        public LeagueController(IApiUserLeague userRepo, IMapper mapper)
        {
            _userRepo = userRepo;
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
            var obj = _userRepo.GetActiveLeague(userID);
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
            var objList = _userRepo.GetApiUserLeagues(userID);

            var objDto = new List<ApiUserLeaguesDTO>();
            foreach (var obj in objList)
            {
                objDto.Add(_mapper.Map<ApiUserLeaguesDTO>(obj));
            }

            return Ok(objDto);
        }
    }
}
