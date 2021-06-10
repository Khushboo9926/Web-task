import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('Basic') Basic = ""
  @Input('color') color =""
  @Input('Price') Price = ""


  @Input('para1') para1 = ""
  @Input('para2') para2 = ""
  @Input('para3') para3 = ""
  @Input('para4') para4 = ""
  @Input('para5') para5 = ""
  @Input('para6') para6 = ""

  constructor() { }

  ngOnInit(): void {
  }

}
