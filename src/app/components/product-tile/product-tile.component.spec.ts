import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTileComponent } from './product-tile.component';
import { RatingComponent } from '../rating/rating.component';
import { Product } from 'src/app/models/product.model';

const testProduct: Product = {
    id: 1,
    brand: 'Aston Grey',
    name: 'Proiria Cap Toe Oxford',
    price: 99.99,
    compValue: 180,
    rating: null
};

describe('ProductTileComponent', () => {
    let component: ProductTileComponent;
    let fixture: ComponentFixture<ProductTileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductTileComponent, RatingComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductTileComponent);
        component = fixture.componentInstance;
        component.product = testProduct;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
