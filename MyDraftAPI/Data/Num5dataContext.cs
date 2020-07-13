using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using MyDraftAPI.Models;
using Microsoft.Extensions.Configuration;

namespace MyDraftAPI.Data
{
    public partial class Num5dataContext : DbContext
    {
        public Num5dataContext()
        {
        }

        public Num5dataContext(DbContextOptions<Num5dataContext> options) : base(options)
        {
        }

        public virtual DbSet<ApiAav> ApiAav { get; set; }
        public virtual DbSet<ApiAdp> ApiAdp { get; set; }
        public virtual DbSet<ApiDepthChart> ApiDepthChart { get; set; }
        public virtual DbSet<ApiInjuryActive> ApiInjuryActive { get; set; }
        public virtual DbSet<ApiInjuryDelete> ApiInjuryDelete { get; set; }
        public virtual DbSet<ApiNews> ApiNews { get; set; }
        public virtual DbSet<ApiPlayer> ApiPlayer { get; set; }
        public virtual DbSet<ApiProjectionsSeason> ApiProjectionsSeason { get; set; }
        public virtual DbSet<ApiProjectionsWeekly> ApiProjectionsWeekly { get; set; }
        public virtual DbSet<ApiProjectionsWeeklyMaster> ApiProjectionsWeeklyMaster { get; set; }
        public virtual DbSet<AppDbPlayers> AppDbPlayers { get; set; }
        public virtual DbSet<AppDbPprojectionsWeekly> AppDbPprojectionsWeekly { get; set; }
        public virtual DbSet<AppDbProjectionsSeason> AppDbProjectionsSeason { get; set; }
        public virtual DbSet<AppDbSchedule> AppDbSchedule { get; set; }
        public virtual DbSet<SptTblPlayers> SptTblPlayers { get; set; }
        public virtual DbSet<SptTblProjectionsWeeklyMaster> SptTblProjectionsWeeklyMaster { get; set; }
        public virtual DbSet<SptTblStatMap> SptTblStatMap { get; set; }
        public virtual DbSet<StageFantasyDefenseGameProjection> StageFantasyDefenseGameProjection { get; set; }
        public virtual DbSet<StageFantasyDefenseSeason> StageFantasyDefenseSeason { get; set; }
        public virtual DbSet<StageFantasyDefenseSeasonProjection> StageFantasyDefenseSeasonProjection { get; set; }
        public virtual DbSet<StageInjury> StageInjury { get; set; }
        public virtual DbSet<StageNews> StageNews { get; set; }
        public virtual DbSet<StagePlayer> StagePlayer { get; set; }
        public virtual DbSet<StagePlayerGameProjection> StagePlayerGameProjection { get; set; }
        public virtual DbSet<StagePlayerSeason> StagePlayerSeason { get; set; }
        public virtual DbSet<StagePlayerSeasonProjection> StagePlayerSeasonProjection { get; set; }
        public virtual DbSet<StageProjectionsWeeklyMaster> StageProjectionsWeeklyMaster { get; set; }
        public virtual DbSet<StageSchedule> StageSchedule { get; set; }
        public virtual DbSet<StageTeam> StageTeam { get; set; }
        // Custom Stored Procedure Entities
        public virtual DbSet<GetPlayerItem> GetPlayerItem { get; set; }
        public virtual DbSet<GetNewsItem> GetNewsItem { get; set; }
        public virtual DbSet<GetPlayerDepthChartItem> GetPlayerDepthChartItem { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ApiAav>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.CreateDate).HasDefaultValueSql("(getdate())");
            });

            modelBuilder.Entity<ApiAdp>(entity =>
            {
                entity.HasKey(e => e.PlayerId)
                    .HasName("PK__api_ADP__4A4E74A84385D2C1");

                entity.Property(e => e.PlayerId).ValueGeneratedNever();

                entity.Property(e => e.CreateDate).HasDefaultValueSql("(getdate())");
            });

            modelBuilder.Entity<ApiDepthChart>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.CreateDate).HasDefaultValueSql("(getdate())");

                entity.Property(e => e.TeamAbbr).IsUnicode(false);
            });

            modelBuilder.Entity<ApiInjuryActive>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.InjuryStatus).IsUnicode(false);

                entity.Property(e => e.InjuryType).IsUnicode(false);
            });

            modelBuilder.Entity<ApiInjuryDelete>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.CreateDate).HasDefaultValueSql("(getdate())");
            });

            modelBuilder.Entity<ApiNews>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Author).IsUnicode(false);

                entity.Property(e => e.Categories).IsUnicode(false);

                entity.Property(e => e.Content).IsUnicode(false);

                entity.Property(e => e.CreateDate).HasDefaultValueSql("(getdate())");

                entity.Property(e => e.NewsUrl).IsUnicode(false);

                entity.Property(e => e.Source).IsUnicode(false);

                entity.Property(e => e.Team).IsUnicode(false);

                entity.Property(e => e.TermsOfUse).IsUnicode(false);

                entity.Property(e => e.TimeAgo).IsUnicode(false);

                entity.Property(e => e.Title).IsUnicode(false);
            });

            modelBuilder.Entity<ApiPlayer>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.College).IsUnicode(false);

                //entity.Property(e => e.CreateDate).HasDefaultValueSql("(getdate())");

                entity.Property(e => e.FirstName).IsUnicode(false);

                entity.Property(e => e.LastName).IsUnicode(false);

                entity.Property(e => e.PhotoUrl).IsUnicode(false);

                entity.Property(e => e.Position).IsUnicode(false);

                //entity.Property(e => e.PositionCategory).IsUnicode(false);

                entity.Property(e => e.Status).IsUnicode(false);

                entity.Property(e => e.TeamAbbr).IsUnicode(false);
            });

            modelBuilder.Entity<ApiProjectionsSeason>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.CreateDate).HasDefaultValueSql("(getdate())");
            });

            modelBuilder.Entity<ApiProjectionsWeekly>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.CreateDate).HasDefaultValueSql("(getdate())");
            });

            modelBuilder.Entity<ApiProjectionsWeeklyMaster>(entity =>
            {
                entity.HasNoKey();
            });

            modelBuilder.Entity<AppDbPlayers>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.College).IsUnicode(false);

                entity.Property(e => e.FirstName).IsUnicode(false);

                entity.Property(e => e.Height).IsUnicode(false);

                entity.Property(e => e.LastName).IsUnicode(false);

                entity.Property(e => e.PhotoUrl).IsUnicode(false);

                entity.Property(e => e.Position).IsUnicode(false);

                entity.Property(e => e.Positioncategory).IsUnicode(false);

                entity.Property(e => e.Status).IsUnicode(false);

                entity.Property(e => e.TeamAbbr).IsUnicode(false);
            });

            modelBuilder.Entity<AppDbPprojectionsWeekly>(entity =>
            {
                entity.HasNoKey();
            });

            modelBuilder.Entity<AppDbProjectionsSeason>(entity =>
            {
                entity.HasNoKey();
            });

            modelBuilder.Entity<AppDbSchedule>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.AwayTeam).IsUnicode(false);

                entity.Property(e => e.HomeTeam).IsUnicode(false);
            });

            modelBuilder.Entity<SptTblPlayers>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.IsRookie).HasDefaultValueSql("((0))");
            });

            modelBuilder.Entity<SptTblProjectionsWeeklyMaster>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Position).IsUnicode(false);
            });

            modelBuilder.Entity<SptTblStatMap>(entity =>
            {
                entity.HasKey(e => e.StatId)
                    .HasName("sqlite_master_PK_stat_map");

                entity.Property(e => e.StatId).ValueGeneratedNever();

                entity.Property(e => e.Name).IsUnicode(false);

                entity.Property(e => e.StatKey).IsUnicode(false);
            });

            modelBuilder.Entity<StageFantasyDefenseGameProjection>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.CreateDate).HasDefaultValueSql("(getdate())");

                entity.Property(e => e.GameId).IsUnicode(false);

                entity.Property(e => e.HomeOrAway).IsUnicode(false);

                entity.Property(e => e.OpponentAbbr).IsUnicode(false);

                entity.Property(e => e.TeamAbbr).IsUnicode(false);
            });

            modelBuilder.Entity<StageFantasyDefenseSeason>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.TeamAbbr).IsUnicode(false);
            });

            modelBuilder.Entity<StageFantasyDefenseSeasonProjection>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.CreateDate).HasDefaultValueSql("(getdate())");

                entity.Property(e => e.TeamAbbr).IsUnicode(false);
            });

            modelBuilder.Entity<StageInjury>(entity =>
            {
                entity.HasKey(e => new { e.InjuryId, e.PlayerId, e.SeasonType, e.Season, e.Week });

                entity.Property(e => e.BodyPart).IsUnicode(false);

                entity.Property(e => e.CreateDate).HasDefaultValueSql("(getdate())");

                entity.Property(e => e.PracticeParticipation).IsUnicode(false);

                entity.Property(e => e.Status).IsUnicode(false);
            });

            modelBuilder.Entity<StageNews>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Author).IsUnicode(false);

                entity.Property(e => e.Categories).IsUnicode(false);

                entity.Property(e => e.Content).IsUnicode(false);

                entity.Property(e => e.Source).IsUnicode(false);

                entity.Property(e => e.Team).IsUnicode(false);

                entity.Property(e => e.TermsOfUse).IsUnicode(false);

                entity.Property(e => e.TimeAgo).IsUnicode(false);

                entity.Property(e => e.Title).IsUnicode(false);

                entity.Property(e => e.Url).IsUnicode(false);
            });

            modelBuilder.Entity<StagePlayer>(entity =>
            {
                entity.HasNoKey();

                entity.HasIndex(e => new { e.PlayerId, e.Position, e.TeamAbbr, e.Active, e.ByeWeek, e.CurrentStatus, e.DepthDisplayOrder, e.DepthPosition, e.DepthPositionCategory, e.DeptOrder, e.PhotoUrl, e.PositionCategory, e.Status })
                    .HasName("nci_wi_stagePlayer_6AF2AAAF196F042F5BCB51F2F5983AB3");

                entity.Property(e => e.BirthDateString).IsUnicode(false);

                entity.Property(e => e.College).IsUnicode(false);

                entity.Property(e => e.CurrentStatus).IsUnicode(false);

                entity.Property(e => e.DepthPosition).IsUnicode(false);

                entity.Property(e => e.DepthPositionCategory).IsUnicode(false);

                entity.Property(e => e.ExperienceString).IsUnicode(false);

                entity.Property(e => e.FirstName).IsUnicode(false);

                entity.Property(e => e.FullName).IsUnicode(false);

                entity.Property(e => e.Height).IsUnicode(false);

                entity.Property(e => e.LastName).IsUnicode(false);

                entity.Property(e => e.PhotoUrl).IsUnicode(false);

                entity.Property(e => e.Position).IsUnicode(false);

                entity.Property(e => e.PositionCategory).IsUnicode(false);

                entity.Property(e => e.ShortName).IsUnicode(false);

                entity.Property(e => e.Status).IsUnicode(false);

                entity.Property(e => e.TeamAbbr).IsUnicode(false);
            });

            modelBuilder.Entity<StagePlayerGameProjection>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.FantasyPosition).IsUnicode(false);

                entity.Property(e => e.GameKey).IsUnicode(false);

                entity.Property(e => e.HomeOrAway).IsUnicode(false);

                entity.Property(e => e.OpponentAbbr).IsUnicode(false);

                entity.Property(e => e.TeamAbbr).IsUnicode(false);
            });

            modelBuilder.Entity<StagePlayerSeason>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.FantasyPosition).IsUnicode(false);

                entity.Property(e => e.FullName).IsUnicode(false);

                entity.Property(e => e.Position).IsUnicode(false);

                entity.Property(e => e.PositionCategory).IsUnicode(false);

                entity.Property(e => e.TeamAbbr).IsUnicode(false);
            });

            modelBuilder.Entity<StagePlayerSeasonProjection>(entity =>
            {
                entity.HasNoKey();

                entity.HasIndex(e => new { e.PlayerId, e.Position })
                    .HasName("nci_wi_stagePlayerSeasonProjection_63A96000DD84734FC2BA27263F0787BB");

                entity.Property(e => e.CreateDate).HasDefaultValueSql("(getdate())");

                entity.Property(e => e.FantasyPosition).IsUnicode(false);

                entity.Property(e => e.FullName).IsUnicode(false);

                entity.Property(e => e.Position).IsUnicode(false);

                entity.Property(e => e.PositionCategory).IsUnicode(false);

                entity.Property(e => e.TeamAbbr).IsUnicode(false);
            });

            modelBuilder.Entity<StageProjectionsWeeklyMaster>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.AwayTeam).IsFixedLength();

                entity.Property(e => e.CreateDate).HasDefaultValueSql("(getdate())");
            });

            modelBuilder.Entity<StageSchedule>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.AwayTeam).IsUnicode(false);

                entity.Property(e => e.HomeTeam).IsUnicode(false);
            });

            modelBuilder.Entity<StageTeam>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.AbbrId).IsUnicode(false);

                entity.Property(e => e.City).IsUnicode(false);

                entity.Property(e => e.Conference).IsUnicode(false);

                entity.Property(e => e.Division).IsUnicode(false);

                entity.Property(e => e.FullName).IsUnicode(false);

                entity.Property(e => e.MascotName).IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
