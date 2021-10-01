import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angulardemo';
  pricingcards=[
      {
          title:"free",
          price:"$0",
          month:"/month",
          checkedItems:[
              "Single User","5GB Storage","Unlimited Public Projects","Community Access"
          ],
          uncheckedItems:["Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"]

      },
      {
          title:"plus",
          price:"$9",
          month:"/month",
          checkedItems:[
              "5 Users","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain" ],
          uncheckedItems:["Monthly Status Reports"]

      },
      {
          title:"pro",
          price:"$49",
          month:"/month",
          checkedItems:["Unlimited Users","150GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Unlimited Free Subdomains","Monthly Status Reports" ]

      }
  ]
}
