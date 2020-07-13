import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { DraftDemoComponent } from '../draft-demo/draft-demo.component';
import { PlayerDetailComponent } from '../draft-demo/player/player-detail/player-detail.component';
import { MyLeagueComponent } from '../draft-demo/league/my-league/my-league.component';
import { LeagueComponent } from '../draft-demo/league/league.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'draft-demo', component: DraftDemoComponent, children: [
    {
      path: ':id',
      component: PlayerDetailComponent
    },
    {path: 'draft-demo/league', component: MyLeagueComponent }
    //{
    //  path: 'league', component: LeagueComponent, children: [
    //  {
    //    path: ':id',
    //    component: MyLeagueComponent,
    //    outlet: "myLeague"
    //  }
      //]
    //}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
