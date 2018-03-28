import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  @Output() clickedAdd = new EventEmitter();
  currentFlavor = "vanilla";

  selectFlavor(flavor) {
    this.currentFlavor = flavor;
  }

  constructor() { }


}
