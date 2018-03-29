import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-visual-icecream',
  templateUrl: './visual-icecream.component.html',
  styleUrls: ['./visual-icecream.component.css']
})
export class VisualIcecreamComponent implements OnInit {
  @Input() childScoopArray: String[];
  constructor() { }
  ngOnInit() {
  }

}
