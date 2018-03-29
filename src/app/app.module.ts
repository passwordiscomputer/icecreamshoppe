import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { OrderTotalComponent } from './order-total/order-total.component';
import { inOrderPipe } from './inOrder.pipe';
import { AddFlavorComponent } from './add-flavor/add-flavor.component';

@NgModule({
  declarations: [
    AppComponent,
    BucketListComponent,
    OrderTotalComponent,
    inOrderPipe,
    AddFlavorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
