import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Bucket } from '../models/bucket.model';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})
export class BucketListComponent implements OnInit {
  @Input() childBucketList: Bucket[];
  @Output() addClickSender = new EventEmitter();
  @Output() subtractClickSender = new EventEmitter();
  @Output() newOrderClickSender = new EventEmitter();

  clickAdd(bucket){
    this.addClickSender.emit(bucket);
  }

  clickSubtract(bucket){
    this.subtractClickSender.emit(bucket);
  }

  clickNewOrder(){
    this.newOrderClickSender.emit();
  }

  constructor() { }

  ngOnInit() {
  }


}
