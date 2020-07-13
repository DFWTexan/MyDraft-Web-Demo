using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyDraftAPI.Models
{
    [Table("appDB_Pprojections_Weekly")]
    public partial class AppDbPprojectionsWeekly
    {
        [Column("player_id")]
        public int PlayerId { get; set; }
        [Column("week")]
        public int Week { get; set; }
        [Column("rec_tds")]
        public float? RecTds { get; set; }
        [Column("tpc_r")]
        public float? TpcR { get; set; }
        [Column("fg_made_20")]
        public float? FgMade20 { get; set; }
        [Column("points_allowed")]
        public float? PointsAllowed { get; set; }
        [Column("pass_completions")]
        public float? PassCompletions { get; set; }
        [Column("uid")]
        public float? Uid { get; set; }
        [Column("fg_a_30")]
        public float? FgA30 { get; set; }
        [Column("id")]
        public float? Id { get; set; }
        [Column("td")]
        public float? Td { get; set; }
        [Column("fifty_fum")]
        public float? FiftyFum { get; set; }
        [Column("fg_miss_50")]
        public float? FgMiss50 { get; set; }
        [Column("kick_block_td")]
        public float? KickBlockTd { get; set; }
        [Column("fifty_pass")]
        public float? FiftyPass { get; set; }
        [Column("yahoo_id")]
        public float? YahooId { get; set; }
        [Column("away_team")]
        public float? AwayTeam { get; set; }
        [Column("forty_rush")]
        public float? FortyRush { get; set; }
        [Column("fg_a_50")]
        public float? FgA50 { get; set; }
        [Column("fg_made_30")]
        public float? FgMade30 { get; set; }
        [Column("fantasyalarmplayerid")]
        public float? Fantasyalarmplayerid { get; set; }
        [Column("fum_lost")]
        public float? FumLost { get; set; }
        [Column("sacks")]
        public float? Sacks { get; set; }
        [Column("team")]
        public float? Team { get; set; }
        [Column("statsplayerid")]
        public float? Statsplayerid { get; set; }
        [Column("xp_made")]
        public float? XpMade { get; set; }
        [Column("punt_td")]
        public float? PuntTd { get; set; }
        [Column("name")]
        public float? Name { get; set; }
        [Column("fum_td")]
        public float? FumTd { get; set; }
        [Column("punt_ry")]
        public float? PuntRy { get; set; }
        [Column("firstname")]
        public float? Firstname { get; set; }
        [Column("yards_allowed")]
        public float? YardsAllowed { get; set; }
        [Column("fum_yards")]
        public float? FumYards { get; set; }
        [Column("game_id")]
        public float? GameId { get; set; }
        [Column("fg_made")]
        public float? FgMade { get; set; }
        [Column("forty_pass")]
        public float? FortyPass { get; set; }
        [Column("fg_made_17")]
        public float? FgMade17 { get; set; }
        [Column("fg_made_40")]
        public float? FgMade40 { get; set; }
        [Column("fifty_rec")]
        public float? FiftyRec { get; set; }
        [Column("fanduelplayerid")]
        public float? Fanduelplayerid { get; set; }
        [Column("timestamp")]
        public float? Timestamp { get; set; }
        [Column("xp_miss")]
        public float? XpMiss { get; set; }
        [Column("solo")]
        public float? Solo { get; set; }
        [Column("solosacks")]
        public float? Solosacks { get; set; }
        [Column("fg_a_20")]
        public float? FgA20 { get; set; }
        [Column("rec_yards")]
        public float? RecYards { get; set; }
        [Column("espn_id")]
        public float? EspnId { get; set; }
        [Column("rush_yards")]
        public float? RushYards { get; set; }
        [Column("rush_tds")]
        public float? RushTds { get; set; }
        [Column("numberfireid")]
        public float? Numberfireid { get; set; }
        [Column("kick_td")]
        public float? KickTd { get; set; }
        [Column("kick_ry")]
        public float? KickRy { get; set; }
        [Column("int_yards")]
        public float? IntYards { get; set; }
        [Column("fg_miss_20")]
        public float? FgMiss20 { get; set; }
        [Column("fg_miss")]
        public float? FgMiss { get; set; }
        [Column("forty_rec")]
        public float? FortyRec { get; set; }
        [Column("pass_ints")]
        public float? PassInts { get; set; }
        [Column("fg_made_50")]
        public float? FgMade50 { get; set; }
        [Column("rotowireplayerid")]
        public float? Rotowireplayerid { get; set; }
        [Column("pass_attempts")]
        public float? PassAttempts { get; set; }
        [Column("ints")]
        public float? Ints { get; set; }
        [Column("yahooplayerid")]
        public float? Yahooplayerid { get; set; }
        [Column("pass_tds")]
        public float? PassTds { get; set; }
        [Column("fg_a_17")]
        public float? FgA17 { get; set; }
        [Column("fg_a_40")]
        public float? FgA40 { get; set; }
        [Column("tpc_p")]
        public float? TpcP { get; set; }
        [Column("pass_yards")]
        public float? PassYards { get; set; }
        [Column("teamid")]
        public float? Teamid { get; set; }
        [Column("sportsdirectplayerid")]
        public float? Sportsdirectplayerid { get; set; }
        [Column("fum_rec")]
        public float? FumRec { get; set; }
        [Column("targets")]
        public float? Targets { get; set; }
        [Column("position")]
        public float? Position { get; set; }
        [Column("tackles")]
        public float? Tackles { get; set; }
        [Column("home_team")]
        public float? HomeTeam { get; set; }
        [Column("tpc_v")]
        public float? TpcV { get; set; }
        [Column("sportradarplayerid")]
        public float? Sportradarplayerid { get; set; }
        [Column("fg_miss_30")]
        public float? FgMiss30 { get; set; }
        [Column("fg_a")]
        public float? FgA { get; set; }
        [Column("start_time")]
        public float? StartTime { get; set; }
        [Column("saf")]
        public float? Saf { get; set; }
        [Column("ast")]
        public float? Ast { get; set; }
        [Column("rush_attempts")]
        public float? RushAttempts { get; set; }
        [Column("rec")]
        public float? Rec { get; set; }
        [Column("xp_a")]
        public float? XpA { get; set; }
        [Column("pdef")]
        public float? Pdef { get; set; }
        [Column("lastname")]
        public float? Lastname { get; set; }
        [Column("tfl")]
        public float? Tfl { get; set; }
        [Column("block")]
        public float? Block { get; set; }
        [Column("halfsacks")]
        public float? Halfsacks { get; set; }
        [Column("sportsdataid")]
        public float? Sportsdataid { get; set; }
        [Column("rotoworldplayerid")]
        public float? Rotoworldplayerid { get; set; }
        [Column("fifty_int")]
        public float? FiftyInt { get; set; }
        [Column("fum_forced")]
        public float? FumForced { get; set; }
        [Column("draftkingsplayerid")]
        public float? Draftkingsplayerid { get; set; }
        [Column("punt_block")]
        public float? PuntBlock { get; set; }
        [Column("fg_miss_40")]
        public float? FgMiss40 { get; set; }
        [Column("fg_miss_17")]
        public float? FgMiss17 { get; set; }
        [Column("fum")]
        public float? Fum { get; set; }
        [Column("fifty_rush")]
        public float? FiftyRush { get; set; }
        [Column("date")]
        public float? Date { get; set; }
        [Column("int_td")]
        public float? IntTd { get; set; }
        [Column("rey100")]
        public float? Rey100 { get; set; }
        [Column("ya549")]
        public float? Ya549 { get; set; }
        [Column("pa0")]
        public float? Pa0 { get; set; }
        [Column("p300")]
        public float? P300 { get; set; }
        [Column("ya299")]
        public float? Ya299 { get; set; }
        [Column("pa14")]
        public float? Pa14 { get; set; }
        [Column("pa1")]
        public float? Pa1 { get; set; }
        [Column("ry100")]
        public float? Ry100 { get; set; }
        [Column("p400")]
        public float? P400 { get; set; }
        [Column("pa28")]
        public float? Pa28 { get; set; }
        [Column("ya399")]
        public float? Ya399 { get; set; }
        [Column("pa7")]
        public float? Pa7 { get; set; }
        [Column("ya449")]
        public float? Ya449 { get; set; }
        [Column("ry200")]
        public float? Ry200 { get; set; }
        [Column("ya199")]
        public float? Ya199 { get; set; }
        [Column("pa35")]
        public float? Pa35 { get; set; }
        [Column("ya100")]
        public float? Ya100 { get; set; }
        [Column("rey200")]
        public float? Rey200 { get; set; }
        [Column("ya499")]
        public float? Ya499 { get; set; }
        [Column("pa22")]
        public float? Pa22 { get; set; }
        [Column("inc")]
        public float? Inc { get; set; }
    }
}
