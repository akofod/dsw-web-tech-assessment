import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from 'src/app/models/product.model';

@Component({
    selector: 'app-collection',
    templateUrl: './collection.component.html',
    styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
    products: any[];
    descriptionText =
        'Shop for men\'s oxford shoes online at DSW, where we carry a variety of dress and casual oxford styles such as wingtips and cap toe shoes in leather, suede, and other materials.';
    currentStore = 'Easton';
    currentSort = 'Featured';

    constructor(private dataService: DataService) {}

    ngOnInit() {
        console.log('init');
        this.products = this.dataService.getProducts();
    }
}
