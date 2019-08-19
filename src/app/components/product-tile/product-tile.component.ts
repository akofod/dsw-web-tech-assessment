import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
    selector: 'app-product-tile',
    templateUrl: './product-tile.component.html',
    styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent {
    @Input() product: Product;
}
