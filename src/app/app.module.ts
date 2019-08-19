import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollectionComponent } from './views/collection/collection.component';
import { HeaderComponent } from './components/header/header.component';
import { RatingComponent } from './components/rating/rating.component';
import { ProductTileComponent } from './components/product-tile/product-tile.component';

@NgModule({
    declarations: [AppComponent, CollectionComponent, HeaderComponent, RatingComponent, ProductTileComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
