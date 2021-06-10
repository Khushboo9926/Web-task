import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-task';
  Data =[
    {
      Basic:"Basic",
      Price:"$199",
      color:"text-success",
      para1:"Lorem ipsum dolor sit amet",
      para2:"sed ut perspiciatis",
      para3:"At vero eos et accusamus",
      para4:"nam libero tempore",
      para5:"Sed ut perspiciatis",
      para6:"Sed ut perspiciatis"
    },
    {
      Basic:"Pro",
      Price:"$399",
      color:"text-dark",
      para1:"Lorem ipsum dolor sit amet",
      para2:"sed ut perspiciatis",
      para3:"At vero eos et accusamus",
      para4:"nam libero tempore",
      para5:"Sed ut perspiciatis",
      para6:"Sed ut perspiciatis"
    },
    {
      Basic:"Enterprise",
      Price:"$899",
      color:"text-danger",
      para1:"Lorem ipsum dolor sit amet",
      para2:"sed ut perspiciatis",
      para3:"At vero eos et accusamus",
      para4:"nam libero tempore",
      para5:"Sed ut perspiciatis",
      para6:"Sed ut perspiciatis"
    }
  ]

  constructor(){
    this.Data.forEach((product) => {
      
    })
  }
}
