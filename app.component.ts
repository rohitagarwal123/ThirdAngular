import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous Infotech!';
  public name="Button Is Not Clicked";

  public fun(title:string) 
  {
   this.title=title;
   return title;  
  }

  public gun() 
  {
   this.name="Button Is Clicked!";
  }
}
