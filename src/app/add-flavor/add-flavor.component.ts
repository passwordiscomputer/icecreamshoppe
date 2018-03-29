import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Bucket } from '../models/bucket.model'

@Component({
  selector: 'app-add-flavor',
  templateUrl: './add-flavor.component.html',
  styleUrls: ['./add-flavor.component.css']
})
export class AddFlavorComponent implements OnInit {
  @Output() clickSender = new EventEmitter();
  constructor() { }

  newColor = "";
  newFontColor= "";

  addFlavor: boolean;

  clickedAdd() {
    this.addFlavor = true;
  }
  addButtonClicked(name: string, price: string, color: string, fontColor: string) {
    this.addFlavor = null;
    let newBucket = new Bucket(name, parseInt(price), color, fontColor);
    this.clickSender.emit(newBucket);
    this.newColor = "";
    this.newFontColor = "";
  }
  ngOnInit() {
  }

}
