import { Injectable } from '@angular/core';
import * as data from '../../assets/json/products.json';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor() {}

    getProducts() {
        return (data as any).default;
    }
}
