import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})

export class FeedService {
    feedData$ = new BehaviorSubject<any>([]);
    constructor(private httpService: HttpService) { }

    changeFeedData(data: any) {
        this.feedData$.next(data);
    }

    getCurrentFeedData(data: any) {
        return this.feedData$.getValue();
    }

    updateFeedData(newFeed: any) {
        let data = [];
        console.log('new'+ newFeed);
        
        data.push(newFeed);
        let currentFeedData = this.getCurrentFeedData(data);
        let newFeedUpdateData = data.concat(currentFeedData);
        this.changeFeedData(newFeedUpdateData);
    }


    feedData(postData: any): Observable<any> {    
        return this.httpService.get('meetings', postData);
    }
}