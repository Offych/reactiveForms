import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { AdditComponent } from './addit/addit.component';


@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    AdditComponent
  ],
  imports: [
    BrowserModule,
    StockInventoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
