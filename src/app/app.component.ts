import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = "Angular Shop site";
  description = "Angular Test project";
  price:number = 10;
  category: CategoryTypes = CategoryTypes.Good;
  isAvailable:boolean = true;

  equivalents: number[] = [41,42,43,46];
  ingredients: Array<string> = ["Not bad", "Good", "Wwwweee"];
}

enum CategoryTypes{
  Good = 1,
  Bad,
  Ugly    
}
