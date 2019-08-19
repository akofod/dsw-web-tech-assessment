import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: DataService = TestBed.get(DataService);
        expect(service).toBeTruthy();
    });

    it('should get data', () => {
        const service: DataService = TestBed.get(DataService);
        const data = service.getProducts();
        expect(data).toBeDefined();
        expect(data.length).toBeTruthy();
    });
});
