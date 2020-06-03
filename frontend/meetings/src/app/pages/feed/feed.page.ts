import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { AuthService } from './../../services/auth.service';
import { ToastService } from './../../services/toast.service';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.page.html',
    styleUrls: ['./feed.page.scss']
})

export class FeedPage implements OnInit {
    public authUser: any;

    postData = {
        token: ''
    };
    constructor(
        private auth: AuthService,
        private feedService: FeedService,
        private toastService: ToastService
    ) { }

    ngOnInit() {
        this.auth.userData$.subscribe((res: any) => {
            this.authUser = res;
            
            this.feedData();
        });
    }

    feedData() {
    
        this.postData.token = this.authUser;
        
        if (this.postData.token) { 
            this.feedService.feedData(this.postData).subscribe(
                (res: any) => {
                    console.log(res)
                    this.feedService.changeFeedData(res);
                }
            );
        } 
    }
}