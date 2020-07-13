using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyDraftAPI.Models.Dtos;
using MyDraftAPI.Repository;

namespace MyDraftAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public class PlayersController : ControllerBase
    {
        private readonly ApiPlayerRepository _playerRepo;
        private readonly IMapper _mapper;

        public PlayersController(ApiPlayerRepository playerRepo, IMapper mapper)
        {
            _playerRepo = playerRepo;
            _mapper = mapper;
        }

        /// <summary>
        /// Get list of Players to Draft (Items for Player List).
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(List<ApiPlayerItemDTO>))]
        public IActionResult GetApiPlayers()
        {
            var objList = _playerRepo.GetApiPlayers();

            var objDto = new List<ApiPlayerItemDTO>();
            foreach (var obj in objList)
            {
                objDto.Add(_mapper.Map<ApiPlayerItemDTO>(obj));
            }

            return Ok(objDto);
        }

        /// <summary>
        /// Get individual Player.
        /// </summary>
        /// <param name="playerID"> The id of the Player </param>
        /// <returns></returns>
        [HttpGet("{playerID:int}", Name = "GetApiPlayerByID")]
        [ProducesResponseType(200, Type = typeof(ApiPlayerDetailDTO))]
        [ProducesResponseType(404)]
        [ProducesDefaultResponseType]
        public IActionResult GetApiPlayerByID(int playerID)
        {
            var objList = _playerRepo.GetApiPlayers();

            var obj = objList.Where(data => data.playerId == playerID).FirstOrDefault();
            if (obj == null)
            {
                return NotFound();
            }
            var objDto = _mapper.Map<ApiPlayerDetailDTO>(obj);
            
            return Ok(objDto);
        }

        /// <summary>
        /// Returns Players depth chart position.
        /// </summary>
        /// <param name="position"></param>
        /// <param name="teamAbbr"></param>
        /// <returns></returns>
        [HttpGet("[action]/{position}/{teamAbbr}", Name = "GetApiPlayerDepthChart")]
        [ProducesResponseType(200, Type = typeof(List<ApiPlayerDepthChartItemDTO>))]
        public IActionResult GetApiPlayerDepthChart(string position, string teamAbbr)
        {
            var objList = _playerRepo.GetApiPlayersDepthChart(position, teamAbbr);

            var objDto = new List<ApiPlayerDepthChartItemDTO>();
            foreach (var obj in objList)
            {
                objDto.Add(_mapper.Map<ApiPlayerDepthChartItemDTO>(obj));
            }

            return Ok(objDto);
        }
    }
}
