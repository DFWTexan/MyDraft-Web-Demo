using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyDraftAPI.Utilities
{
    public class ApiUtility
    {
        //Tom Brady: http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/BRA371156.png
        //Drew Brees: http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/BRE229498.png
        //Joe Flacco: http://static.fantasydata.com/headshots/nfl/low-res/611.png
        public static String transparentPlayerImageURLForPlayerID(String playerID)
        {
            String eliasID = playerID;
            String url = null;
            if (eliasID.Length > 0)
            {
                String baseURL = "http://static.fantasydata.com/headshots/" + "nfl/low-res";
                String fileExt = ".png";
                url = String.Format("{0}/{1}{2}",
                       baseURL,
                       eliasID,
                       fileExt);
            }

            return url;
        }
    }
}
