using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("sptTbl_Projections_Weekly_MASTER")]
    public partial class SptTblProjectionsWeeklyMaster
    {
        [Column("player_id")]
        public int? PlayerId { get; set; }
        [Column("week")]
        public int? Week { get; set; }
        [Column("rec_tds")]
        public double? RecTds { get; set; }
        [Column("tpc_r")]
        public double? TpcR { get; set; }
        [Column("fg_made_20")]
        public double? FgMade20 { get; set; }
        [Column("points_allowed")]
        public double? PointsAllowed { get; set; }
        [Column("pass_completions")]
        public double? PassCompletions { get; set; }
        [Column("uid")]
        public double? Uid { get; set; }
        [Column("fg_a_30")]
        public double? FgA30 { get; set; }
        [Column("id")]
        public double? Id { get; set; }
        [Column("td")]
        public double? Td { get; set; }
        [Column("fifty_fum")]
        public double? FiftyFum { get; set; }
        [Column("fg_miss_50")]
        public double? FgMiss50 { get; set; }
        [Column("kick_block_td")]
        public double? KickBlockTd { get; set; }
        [Column("fifty_pass")]
        public double? FiftyPass { get; set; }
        [Column("yahoo_id")]
        public double? YahooId { get; set; }
        [Column("away_team")]
        public double? AwayTeam { get; set; }
        [Column("forty_rush")]
        public double? FortyRush { get; set; }
        [Column("fg_a_50")]
        public double? FgA50 { get; set; }
        [Column("fg_made_30")]
        public double? FgMade30 { get; set; }
        [Column("fantasyalarmplayerid")]
        public double? Fantasyalarmplayerid { get; set; }
        [Column("fum_lost")]
        public double? FumLost { get; set; }
        [Column("sacks")]
        public double? Sacks { get; set; }
        [Column("team")]
        public double? Team { get; set; }
        [Column("statsplayerid")]
        public double? Statsplayerid { get; set; }
        [Column("xp_made")]
        public double? XpMade { get; set; }
        [Column("punt_td")]
        public double? PuntTd { get; set; }
        [Column("name")]
        public double? Name { get; set; }
        [Column("fum_td")]
        public double? FumTd { get; set; }
        [Column("punt_ry")]
        public double? PuntRy { get; set; }
        [Column("firstname")]
        public double? Firstname { get; set; }
        [Column("yards_allowed")]
        public double? YardsAllowed { get; set; }
        [Column("fum_yards")]
        public double? FumYards { get; set; }
        [Column("game_id")]
        public double? GameId { get; set; }
        [Column("fg_made")]
        public double? FgMade { get; set; }
        [Column("forty_pass")]
        public double? FortyPass { get; set; }
        [Column("fg_made_17")]
        public double? FgMade17 { get; set; }
        [Column("fg_made_40")]
        public double? FgMade40 { get; set; }
        [Column("fifty_rec")]
        public double? FiftyRec { get; set; }
        [Column("fanduelplayerid")]
        public double? Fanduelplayerid { get; set; }
        [Column("timestamp")]
        public double? Timestamp { get; set; }
        [Column("xp_miss")]
        public double? XpMiss { get; set; }
        [Column("solo")]
        public double? Solo { get; set; }
        [Column("solosacks")]
        public double? Solosacks { get; set; }
        [Column("fg_a_20")]
        public double? FgA20 { get; set; }
        [Column("rec_yards")]
        public double? RecYards { get; set; }
        [Column("espn_id")]
        public double? EspnId { get; set; }
        [Column("rush_yards")]
        public double? RushYards { get; set; }
        [Column("rush_tds")]
        public double? RushTds { get; set; }
        [Column("numberfireid")]
        public double? Numberfireid { get; set; }
        [Column("kick_td")]
        public double? KickTd { get; set; }
        [Column("kick_ry")]
        public double? KickRy { get; set; }
        [Column("int_yards")]
        public double? IntYards { get; set; }
        [Column("fg_miss_20")]
        public double? FgMiss20 { get; set; }
        [Column("fg_miss")]
        public double? FgMiss { get; set; }
        [Column("forty_rec")]
        public double? FortyRec { get; set; }
        [Column("pass_ints")]
        public double? PassInts { get; set; }
        [Column("fg_made_50")]
        public double? FgMade50 { get; set; }
        [Column("rotowireplayerid")]
        public double? Rotowireplayerid { get; set; }
        [Column("pass_attempts")]
        public double? PassAttempts { get; set; }
        [Column("ints")]
        public double? Ints { get; set; }
        [Column("yahooplayerid")]
        public double? Yahooplayerid { get; set; }
        [Column("pass_tds")]
        public double? PassTds { get; set; }
        [Column("fg_a_17")]
        public double? FgA17 { get; set; }
        [Column("fg_a_40")]
        public double? FgA40 { get; set; }
        [Column("tpc_p")]
        public double? TpcP { get; set; }
        [Column("pass_yards")]
        public double? PassYards { get; set; }
        [Column("teamid")]
        public double? Teamid { get; set; }
        [Column("sportsdirectplayerid")]
        public double? Sportsdirectplayerid { get; set; }
        [Column("fum_rec")]
        public double? FumRec { get; set; }
        [Column("targets")]
        public double? Targets { get; set; }
        [Column("position")]
        [StringLength(5)]
        public string Position { get; set; }
        [Column("tackles")]
        public double? Tackles { get; set; }
        [Column("home_team")]
        public double? HomeTeam { get; set; }
        [Column("tpc_v")]
        public double? TpcV { get; set; }
        [Column("sportradarplayerid")]
        public double? Sportradarplayerid { get; set; }
        [Column("fg_miss_30")]
        public double? FgMiss30 { get; set; }
        [Column("fg_a")]
        public double? FgA { get; set; }
        [Column("start_time")]
        public double? StartTime { get; set; }
        [Column("saf")]
        public double? Saf { get; set; }
        [Column("ast")]
        public double? Ast { get; set; }
        [Column("rush_attempts")]
        public double? RushAttempts { get; set; }
        [Column("rec")]
        public double? Rec { get; set; }
        [Column("xp_a")]
        public double? XpA { get; set; }
        [Column("pdef")]
        public double? Pdef { get; set; }
        [Column("lastname")]
        public double? Lastname { get; set; }
        [Column("tfl")]
        public double? Tfl { get; set; }
        [Column("block")]
        public double? Block { get; set; }
        [Column("halfsacks")]
        public double? Halfsacks { get; set; }
        [Column("sportsdataid")]
        public double? Sportsdataid { get; set; }
        [Column("rotoworldplayerid")]
        public double? Rotoworldplayerid { get; set; }
        [Column("fifty_int")]
        public double? FiftyInt { get; set; }
        [Column("fum_forced")]
        public double? FumForced { get; set; }
        [Column("draftkingsplayerid")]
        public double? Draftkingsplayerid { get; set; }
        [Column("punt_block")]
        public double? PuntBlock { get; set; }
        [Column("fg_miss_40")]
        public double? FgMiss40 { get; set; }
        [Column("fg_miss_17")]
        public double? FgMiss17 { get; set; }
        [Column("fum")]
        public double? Fum { get; set; }
        [Column("fifty_rush")]
        public double? FiftyRush { get; set; }
        [Column("date")]
        public double? Date { get; set; }
        [Column("int_td")]
        public double? IntTd { get; set; }
        [Column("rey100")]
        public double? Rey100 { get; set; }
        [Column("ya549")]
        public double? Ya549 { get; set; }
        [Column("pa0")]
        public double? Pa0 { get; set; }
        [Column("p300")]
        public double? P300 { get; set; }
        [Column("ya299")]
        public double? Ya299 { get; set; }
        [Column("pa14")]
        public double? Pa14 { get; set; }
        [Column("pa1")]
        public double? Pa1 { get; set; }
        [Column("ry100")]
        public double? Ry100 { get; set; }
        [Column("p400")]
        public double? P400 { get; set; }
        [Column("pa28")]
        public double? Pa28 { get; set; }
        [Column("ya399")]
        public double? Ya399 { get; set; }
        [Column("pa7")]
        public double? Pa7 { get; set; }
        [Column("ya449")]
        public double? Ya449 { get; set; }
        [Column("ry200")]
        public double? Ry200 { get; set; }
        [Column("ya199")]
        public double? Ya199 { get; set; }
        [Column("pa35")]
        public double? Pa35 { get; set; }
        [Column("ya100")]
        public double? Ya100 { get; set; }
        [Column("rey200")]
        public double? Rey200 { get; set; }
        [Column("ya499")]
        public double? Ya499 { get; set; }
        [Column("pa22")]
        public double? Pa22 { get; set; }
        [Column("inc")]
        public double? Inc { get; set; }
    }
}
