import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionComponent } from './collection.component';
import { ProductTileComponent } from '../../components/product-tile/product-tile.component';
import { RatingComponent } from '../../components/rating/rating.component';

describe('CollectionComponent', () => {
    let component: CollectionComponent;
    let fixture: ComponentFixture<CollectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CollectionComponent,
                ProductTileComponent,
                RatingComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CollectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should load product data', () => {
        expect(component.products).toBeDefined();
        expect(component.products.length).toBeTruthy();
    });
});
