import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
    @Input() value: number;
    ratingFill: number;
    constructor() {}

    ngOnInit() {
        this.ratingFill = (this.value / 5) * 100;
    }
}
