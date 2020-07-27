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
    public class DraftController : Controller
    {
        private readonly IApiDraftRepository _draftRepository;
        private readonly IMapper _mapper;
        public DraftController(IApiDraftRepository draftRepository, IMapper mapper)
        {
            _draftRepository = draftRepository;
            _mapper = mapper;
        }

        /// <summary>
        /// Create drafted player.
        /// </summary>
        /// <param name="apiUserDraftSelectionsDTO"></param>
        /// <returns></returns>
        [HttpPost("[action]", Name = "DraftPlayer")]
        [ProducesResponseType(201, Type = typeof(ApiUserDraftSelectionsDTO))]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult DraftPlayer([FromBody] IApiDraftRepository apiUserDraftSelectionsDTO)
        {
            if (apiUserDraftSelectionsDTO == null)
            {
                return BadRequest(ModelState);
            }

            var draftObj = _mapper.Map<UserDraftSelections>(apiUserDraftSelectionsDTO);
            if (!_draftRepository.CreateDraftPick(draftObj))
            {
                ModelState.AddModelError("", $"Something went wrong when adding the record {draftObj.PlayerId}");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }

        /// <summary>
        /// Delete drafted Player
        /// </summary>
        /// <param name="apiUserDraftSelectionsDTO"></param>
        /// <returns></returns>
        [HttpDelete("[action]", Name = "DeleteDraftedPlayer")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult DeleteDraftedPlayer([FromBody] IApiDraftRepository apiUserDraftSelectionsDTO)
        {
            if (apiUserDraftSelectionsDTO == null)
            {
                return BadRequest(ModelState);
            }

            var draftObj = _mapper.Map<UserDraftSelections>(apiUserDraftSelectionsDTO);
            if (!_draftRepository.DeleteDraftPick(draftObj))
            {
                ModelState.AddModelError("", $"Something went wrong when deleting the record {draftObj.PlayerId}");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }
    }
}
