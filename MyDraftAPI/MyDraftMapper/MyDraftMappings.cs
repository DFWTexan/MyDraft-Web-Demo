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
            CreateMap<GetPlayerItem, ApiPlayerItemDTO>().ReverseMap();
            CreateMap<GetPlayerItem, ApiPlayerDetailDTO>().ReverseMap();
            CreateMap<GetPlayerDepthChartItem, ApiPlayerDepthChartItemDTO>().ReverseMap();
            CreateMap<GetNewsItem, ApiNewsItemDTO>().ReverseMap();
        }
    }
}
