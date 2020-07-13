import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DropdownDirective } from './draft-demo/shared/dropdown.directive';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DraftDemoComponent } from './draft-demo/draft-demo.component';
import { PlayerFilterComponent } from './draft-demo/player/player-filter/player-filter.component';
import { PlayerSearchComponent } from './draft-demo/player/player-search/player-search.component';
import { PlayerListComponent } from './draft-demo/player/player-list/player-list.component';
import { PlayerItemComponent } from './draft-demo/player/player-list/player-item/player-item.component';
import { PlayerDetailComponent } from './draft-demo/player/player-detail/player-detail.component';
import { NewsListComponent } from './draft-demo/nfl-info/news/news-list/news-list.component';
import { NewsItemComponent } from './draft-demo/nfl-info/news/news-list/news-item/news-item.component';
import { NewsDetailComponent } from './draft-demo/nfl-info/news/news-detail/news-detail.component';
import { FanteamInfoComponent } from './draft-demo/fanteam-info/fanteam-info.component';
import { DraftSelectionsComponent } from './draft-demo/fanteam-info/draft-selections/draft-selections.component';
import { FanTeamsComponent } from './draft-demo/fanteam-info/fan-teams/fan-teams.component';
import { RostersComponent } from './draft-demo/fanteam-info/rosters/rosters.component';
import { RankingComponent } from './draft-demo/fanteam-info/ranking/ranking.component';
import { TeamRosterComponent } from './draft-demo/nfl-info/team-roster/team-roster.component';
import { NflInfoComponent } from './draft-demo/nfl-info/nfl-info.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PlayerService } from './draft-demo/player/player.service';
import { LeagueComponent } from './draft-demo/league/league.component';
import { MyLeagueComponent } from './draft-demo/league/my-league/my-league.component';
import { LeagueEditComponent } from './draft-demo/league/league-edit/league-edit.component';
import { CustomScoringComponent } from './draft-demo/league/league-edit/custom-scoring/custom-scoring.component';
import { EditPassingComponent } from './draft-demo/league/league-edit/custom-scoring/edit-passing/edit-passing.component';
import { EditRushingComponent } from './draft-demo/league/league-edit/custom-scoring/edit-rushing/edit-rushing.component';
import { EditRecievingComponent } from './draft-demo/league/league-edit/custom-scoring/edit-recieving/edit-recieving.component';
import { EditKickingComponent } from './draft-demo/league/league-edit/custom-scoring/edit-kicking/edit-kicking.component';
import { EditDefspecialComponent } from './draft-demo/league/league-edit/custom-scoring/edit-defspecial/edit-defspecial.component';
import { EditMiscComponent } from './draft-demo/league/league-edit/custom-scoring/edit-misc/edit-misc.component';
import { EditIdpComponent } from './draft-demo/league/league-edit/custom-scoring/edit-idp/edit-idp.component';
import { LeagueListComponent } from './draft-demo/league/league-list/league-list.component';
import { LeagueItemComponent } from './draft-demo/league/league-list/league-item/league-item.component';
import { TeamsEditComponent } from './draft-demo/league/league-edit/teams-edit/teams-edit.component';
import { RosterListComponent } from './draft-demo/league/league-edit/roster-list/roster-list.component';
import { RosterItemComponent } from './draft-demo/league/league-edit/roster-list/roster-item/roster-item.component';
import { PlayerNewsListComponent } from './draft-demo/player/player-detail/player-news-list/player-news-list.component';
import { PlayerNewsItemComponent } from './draft-demo/player/player-detail/player-news-list/player-news-item/player-news-item.component';
import { PlayerDepthListComponent } from './draft-demo/player/player-detail/player-depth-list/player-depth-list.component';
import { PlayerDepthItemComponent } from './draft-demo/player/player-detail/player-depth-list/player-depth-item/player-depth-item.component';
import { PlayerStatListComponent } from './draft-demo/player/player-detail/player-stat-list/player-stat-list.component';
import { PlayerStatItemComponent } from './draft-demo/player/player-detail/player-stat-list/player-stat-item/player-stat-item.component';

@NgModule({
  declarations: [
  AppComponent,
    NavMenuComponent,
    DropdownDirective,
    HomeComponent,
    FetchDataComponent,
    DraftDemoComponent,
    PlayerFilterComponent,
    PlayerSearchComponent,
    PlayerListComponent,
    PlayerItemComponent,
    PlayerDetailComponent,
    NewsListComponent,
    NewsItemComponent,
    NewsDetailComponent,
    FanteamInfoComponent,
    DraftSelectionsComponent,
    FanTeamsComponent,
    RostersComponent,
    RankingComponent,
    TeamRosterComponent,
    NflInfoComponent,
    LeagueComponent,
    MyLeagueComponent,
    LeagueEditComponent,
    CustomScoringComponent,
    EditPassingComponent,
    EditRushingComponent,
    EditRecievingComponent,
    EditKickingComponent,
    EditDefspecialComponent,
    EditMiscComponent,
    EditIdpComponent,
    LeagueListComponent,
    LeagueItemComponent,
    TeamsEditComponent,
    RosterListComponent,
    RosterItemComponent,
    PlayerNewsListComponent,
    PlayerNewsItemComponent,
    PlayerDepthListComponent,
    PlayerDepthItemComponent,
    PlayerStatListComponent,
    PlayerStatItemComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
    //RouterModule.forRoot([
    //  { path: '', component: HomeComponent, pathMatch: 'full' },
    //  { path: 'draft-demo', component: DraftDemoComponent },
    //])
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
