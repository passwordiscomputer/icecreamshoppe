import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Bucket } from '../models/bucket.model';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})
export class BucketListComponent implements OnInit {
  @Input() childBucketList: Bucket[];
  constructor() { }


}
