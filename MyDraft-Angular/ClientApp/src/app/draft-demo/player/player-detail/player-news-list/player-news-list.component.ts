import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { NewsItem } from '../../../nfl-info/news/newsItem.model';
import { NewsService } from '../../../nfl-info/news/news.service';

@Component({
  selector: 'app-player-news-list',
  templateUrl: './player-news-list.component.html',
  styleUrls: ['./player-news-list.component.css']
})
export class PlayerNewsListComponent implements OnInit, OnDestroy {
  playerNews: NewsItem[]
  idx: number;
  subscription: Subscription;

  constructor(private newsService: NewsService,
        private route: ActivatedRoute,
        private router: Router) { }
    
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.idx = +params['id'];
          this.getPlayerNews(this.idx);
        });
  }

  getPlayerNews(id: number) {
    this.subscription = this.newsService.getNewsByPlayer(id)
      .subscribe(data => this.playerNews = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
