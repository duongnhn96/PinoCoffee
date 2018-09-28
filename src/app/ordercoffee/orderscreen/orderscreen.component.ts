import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderscreen',
  templateUrl: './orderscreen.component.html',
  styleUrls: ['./orderscreen.component.scss']
})
export class OrderscreenComponent implements OnInit {
  showOrderList = false;
  onShowOrderList() { this.showOrderList = true; }
  constructor() { }

  ngOnInit() {
  }

}
