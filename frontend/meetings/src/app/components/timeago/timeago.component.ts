import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-timeago',
    templateUrl: './timeago.component.html',
    styleUrls: ['./timeago.component.scss'],
})
export class TimeagoComponent implements OnInit {
    @Input() created: any;
    newTime: any;
    constructor() { }

    ngOnInit() {
        this.newTime = this.converTime(this.created);;
        console.log(this.newTime);
        
    }

    converTime(time: any) {
        let a = new Date(time * 1000);
        
        return a;
    }

}