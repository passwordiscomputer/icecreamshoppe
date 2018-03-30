import { Component } from '@angular/core';
import { Bucket } from './models/bucket.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  masterBucketList: Bucket[] = [
    new Bucket('chocolate', 2.49, '#6b3e26', 'white'),
    new Bucket('strawberry', 1.99, 'pink'),
    new Bucket('vanilla', 2.49, 'beige')
  ];
  masterOrderArray: Array[] = [[]];
  masterScoopArray: Array[] = [[]];
  currentOrder = 0;

  sellScoops() {
    for (let bucket of this.masterBucketList) {
      bucket.currentScoops = 0;; // 1, "string", false
    }
    this.masterScoopArray = [];
  }

  addFlavor(bucket) {
    this.masterBucketList.push(bucket);
  }

  addCurrentScoop(bucket) {
    if (bucket.addScoop()) {
      this.masterOrderArray[this.currentOrder].unshift(bucket.color);
    }
  }

  subtractCurrentScoop(bucket) {
    if(bucket.subtractScoop()){
      this.masterOrderArray[this.currentOrder].splice( this.masterOrderArray[this.currentOrder].indexOf(bucket.color), 1 );
    }
  }

  createNewOrder(){
    this.masterOrderArray.push([]);
    this.currentOrder = this.masterOrderArray.length - 1;
    console.log(this.masterOrderArray.length);
  }



}
