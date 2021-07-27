import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormArray, FormBuilder } from "@angular/forms";
import { Product, Item } from '../../models/product.interface';
import { StockInventoryService } from '../../services/stock-inventory.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'stock-inventory',
    styleUrls: ['stock-inventory.component.scss'],
    template: `
        <div class="stock-inventory">
           <form [formGroup]="form" (ngSubmit)="onSubmit()">

           <stock-branch
           [parent]="form">
           </stock-branch>

           <stock-selector
           [parent]="form"
           [products]="products"
           (added)="addStock($event)">
           </stock-selector>

           <stock-products
           [parent]="form"
           (removed)="removeStock($event)">
           </stock-products>

            <div class="stock-inventory__buttons">
                <button type="submit"
                [disabled]="form.invalid">
                Order Stock</button>
            </div>
            <pre>{{form.value | json }}</pre>
           </form>
        </div>
    `
})
export class StockInventoryComponent implements OnInit{
    
    constructor(private fb: FormBuilder, private stockService: StockInventoryService) {}
    
    ngOnInit(): void {
        const cart = this.stockService.getCartItems();
        const products = this.stockService.getProducts();

    }
    
    products: Product[];
    
    form = this.fb.group({
        store: this.fb.group({
            branch: '',
            code: ''
        }),
        selector: this.createStock({}),
        stock: this.fb.array([])
    })
    
    createStock(stock) {
        return this.fb.group({
            product_id: parseInt(stock.product_id, 10) || '',
            quantity: stock.quantity || 10
        })
    }
    
    addStock(stock) {
        const control = this.form.get('stock') as FormArray;
        console.log(stock)
        control.push(this.createStock(stock));
    }
    
    removeStock({ group, index } : { group: FormGroup, index: number }) {
        const control = this.form.get('stock') as FormArray;
        control.removeAt(index)
        console.log(group, index)
    }
    
    onSubmit() {
        
        
        //console.log('Submit', this.form.value);
    }
}