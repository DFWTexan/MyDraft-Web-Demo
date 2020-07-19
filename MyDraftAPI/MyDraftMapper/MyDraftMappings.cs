using AutoMapper;
using MyDraftAPI.Models;
using MyDraftAPI.Models.Dtos;
//using ParkyAPI.Models;
//using ParkyAPI.Models.Dtos;
//using ParkyAPI.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDraftAPI.MyDraftMapper
{
    public class MyDraftMappings : Profile 
    {
        public MyDraftMappings()
        {
            // Player
            CreateMap<GetPlayerItem, ApiPlayerItemDTO>().ReverseMap();
            CreateMap<GetPlayerItem, ApiPlayerDetailDTO>().ReverseMap();
            CreateMap<GetPlayerDepthChartItem, ApiPlayerDepthChartItemDTO>().ReverseMap();
            // News
            CreateMap<GetNewsItem, ApiNewsItemDTO>().ReverseMap();
            // League
            CreateMap<UserLeague, ApiUserLeaguesDTO>().ReverseMap();
        }
    }
}
