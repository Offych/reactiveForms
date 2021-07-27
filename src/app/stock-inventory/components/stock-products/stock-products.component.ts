import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {
  @Input() parent: FormGroup;
  @Output() removed = new EventEmitter<any>();
  
  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }
  
  onRemove(group, index) {
    this.removed.emit({ group, index})
  }
  constructor() { }

  ngOnInit(): void {
  }

}
