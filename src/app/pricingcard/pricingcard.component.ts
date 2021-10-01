import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricingcard',
  templateUrl: './pricingcard.component.html',
  styleUrls: ['./pricingcard.component.less']
})
export class PricingcardComponent implements OnInit {
 @Input() myData:any={};
  constructor() { }

  ngOnInit(): void {
  }

}
