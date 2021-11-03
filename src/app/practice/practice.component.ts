import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls : ['./practice.component.css']
})
export class PracticeComponent   {
  
 message : string  ="Welcome to Demo of Data Binding";
 image1:string="/assets/images/male.png";
 firstName : string ="Deepak";
 lastName : string ="Kumar";
 device : string  = null;
 enable : boolean = true;
 box2: boolean = true;
 
 hello()
 {
   console.log("Hello");
 }

 OnTextBoxClick(input)
 {
   console.log(input.target);
   console.log(input.target.value);
   
 }
 onClick(event)
 {
   console.log(event.target.value);
   this.device= event.target.value;
 }
  }

 
