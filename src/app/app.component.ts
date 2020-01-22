import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-manager';

  name : string = '';
  color : string = '';

  getColor() {
    if(this.name.length >= 15) {
      return this.color;
    }
  }

}
