import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
