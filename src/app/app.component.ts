import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name="MEAN STACK APP demo"

  onNameChange(event){
    this.name = event.target.value
  }

  handleUserUpdated(user) {
  }  
}
