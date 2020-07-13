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
    public class NewsController : Controller
    {
        private readonly ApiNewsRepository _newsrRepo;
        private readonly IMapper _mapper;

        public NewsController(ApiNewsRepository newsRepo, IMapper mapper)
        {
            _newsrRepo = newsRepo;
            _mapper = mapper;
        }

        /// <summary>
        /// Get list of News (Items for News List).
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(List<ApiNewsItemDTO>))]
        public IActionResult GetApiNews()
        {
            var objList = _newsrRepo.GetAllNews();

            var objDto = new List<ApiNewsItemDTO>();
            foreach (var obj in objList)
            {
                objDto.Add(_mapper.Map<ApiNewsItemDTO>(obj));
            }

            return Ok(objDto);
        }

        /// <summary>
        /// Get News for Player.
        /// </summary>
        /// <param name="playerId"> The id of the Player </param>
        /// <returns></returns>
        [HttpGet("{playerId:int}", Name = "GetNewsByPlayerID")]
        [ProducesResponseType(200, Type = typeof(List<ApiNewsItemDTO>))]
        [ProducesResponseType(404)]
        [ProducesDefaultResponseType]
        public IActionResult GetNewsByPlayerID(int playerId)
        {
            var objList = _newsrRepo.GetAllNews();

            var objDto = new List<ApiNewsItemDTO>();
            foreach (var obj in objList.Where(data => data.PlayerId == playerId))
            {
                objDto.Add(_mapper.Map<ApiNewsItemDTO>(obj));
            }

            return Ok(objDto);
        }

        /// <summary>
        /// Get News for NFL Team.
        /// </summary>
        /// <param name="teamId"> The id of the NFL Team. </param>
        /// <returns></returns>
        [HttpGet("[action]/{teamId:int}", Name = "GetNewsByNFLTeamID")]
        [ProducesResponseType(200, Type = typeof(List<ApiNewsItemDTO>))]
        [ProducesResponseType(404)]
        [ProducesDefaultResponseType]
        public IActionResult GetNewsByNFLTeamID(int teamId)
        {
            var objList = _newsrRepo.GetAllNews();

            var objDto = new List<ApiNewsItemDTO>();
            foreach (var obj in objList.Where(data => data.TeamId == teamId))
            {
                objDto.Add(_mapper.Map<ApiNewsItemDTO>(obj));
            }

            return Ok(objDto);
        }
    }
}
