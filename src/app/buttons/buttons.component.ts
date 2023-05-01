import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  selected: string = 'nothing';

  onClick(what: string): void {
    if (!this.selected){ //if nothing is selected
      this.selected=what;//then select clicked button
    } else {                         //if any button is already selected
      if (this.selected===what) {      //if clicked button is already selected
        this.selected='nothing';       //then unselect it
      } else this.selected=what;
    }
    console.log(`Button:onClick - selected=${this.selected}`);
  }

}
