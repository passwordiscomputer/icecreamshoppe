import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderTotalComponent } from './order-total/order-total.component';


@NgModule({
  declarations: [
    AppComponent,
    BucketListComponent,
    OrderFormComponent,
    OrderTotalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
