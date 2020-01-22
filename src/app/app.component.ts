import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-manager';

  name : string = 'Dora';
  id : number = 1 ;
  isImportant : boolean = true;

  greeter() {
    console.log('Hello !')
  }


  num1 : number;
  num2 : number;
  res : number;
  sol : string;

  sum() {
    this.res = +this.num1 + +this.num2;
    console.log(this.res)
    if(this.res >= 1000) {
      console.log("Big number");
      return "Big number";
    } else if(this.res < 1000){
      console.log("Small number")
      return "Small number" ;
    } else {
      return "";
    }
  }

  public arr = [];

  namee : string;
  age : number;
  gender : string;

  genders: string[] = ['Male', 'Female', 'Other'];

  person = {name: "", age: 0, gender: ""};

  counter : number = -1;

  add() {
    this.person.name = this.namee;
    this.person.age = this.age;
    this.person.gender = this.gender;

    this.counter++;

    this.arr[this.counter] = this.person;
  
    

    console.log(this.arr);
  }

}
