import { Component } from "@angular/core";

@Component({
 selector : 'new-comp',
 template : `<h1> Hello from New Component </h1>
 {{name}} `
})
export class NewComponent 
{
 
   name : string  ="Deepak Kumar";

}