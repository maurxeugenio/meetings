import { Component, Input, OnInit } from '@angular/core';
import { FeedService } from './../../services/feed.service';

@Component({
    selector: 'app-feed-card',
    templateUrl: './feed-card.component.html',
    styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent implements OnInit {
    @Input() loginUser: any;
    feedData: any;
    postData = {
        token: '',
        feed_id: ''
    };

    constructor(
        private feedSerivce: FeedService,
    ) { }

    ngOnInit() {
        this.feedSerivce.feedData$.subscribe((res: any) => {
            this.feedData = res;
        });
    }

   
}