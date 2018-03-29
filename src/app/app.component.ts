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

  masterScoopArray: String[] = [];

  sellScoops() {
    for (let bucket of this.masterBucketList) {
      bucket.currentScoops = 0;; // 1, "string", false
    }
  }

  addFlavor(bucket) {
    this.masterBucketList.push(bucket);
  }

  addCurrentScoop(bucket) {
    bucket.addScoop();
    this.masterScoopArray.push(bucket.color);
    console.log(this.scoopArray);
  }

  subtractCurrentScoop(bucket) {
    bucket.subtractScoop();

  }

}
