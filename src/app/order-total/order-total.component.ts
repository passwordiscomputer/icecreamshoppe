import { Component, Input, Output,  OnInit } from '@angular/core';
import { Bucket } from '../models/bucket.model'
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-order-total',
  templateUrl: './order-total.component.html',
  styleUrls: ['./order-total.component.css']
})
export class OrderTotalComponent implements OnInit {
  @Input() childBucketList: Bucket[];
  constructor() { }
  color = "#555555"


  ngOnInit() {
  }


}
