import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Product, Item } from '../models/product.interface';

@Injectable()
export class StockInventoryService {
    constructor(private http: HttpClient) {}
    
    getCartItems(): Observable<Item[]> {
        const url = '/api/cart';
        return this.http
            .get(url)
            .pipe(map((response: any) => response.json()))
    }
    
    getProducts(): Observable<Product[]> {
        const url = '/api/products';
        return this.http
            .get(url)
            .pipe(map((response: any) => response.json()))
    }
}