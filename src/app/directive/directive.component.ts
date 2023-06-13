import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
players:string[]=["Sachin Tendulkar","Virat Kohali","M.S,Dhoni","Rohit Sharma","Hardik Pandya"]
massage:string=''
age:number=20

}
