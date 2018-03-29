import { Component, Input, Output, EventEmitter,  OnInit } from '@angular/core';
import { Bucket } from '../models/bucket.model';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-order-total',
  templateUrl: './order-total.component.html',
  styleUrls: ['./order-total.component.css']
})
export class OrderTotalComponent implements OnInit {
  @Input() childBucketList: Bucket[];
  @Output() clickSender = new EventEmitter();
  constructor() { }
  color = '#555555';
  ngOnInit() {
  }

  clickedSell(){
    this.clickSender.emit();
  }

  getTotal(){
    let total = 0;
    for(let bucket of this.childBucketList){
      total += bucket.currentScoops * bucket.scoopPrice;
    }
    return(Math.round(total*100)/100);
  }

}
