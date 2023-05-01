import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  selected: string = 'nothing';

  routeTo(button: string): void {
    switch (button) {
      case 'List': {
        this.router.navigate(['/list']);
        break;
      }
      case 'Add': {
        this.router.navigate(['/add']);
        break;
      }
      case 'Reports': {
        this.router.navigate(['/reports']);
        break;
      }
      default: {
        this.router.navigate(['/']);
        break;
      }
    }
  }

  onClick(selectedButton: string): void {
    if (this.selected === 'nothing') {
      //if nothing is selected
      this.selected = selectedButton; //then select clicked button
      this.routeTo(selectedButton);
    } else {
      //if any button is already selected
      if (this.selected === selectedButton) {
        //if clicked button is already selected
        this.selected = 'nothing'; //then unselect it
        this.routeTo('nothing');
      } else {
        this.selected = selectedButton;
        this.routeTo(selectedButton);
      }
      console.log(`Button:onClick - selected=${this.selected}`);
    }
  }

  constructor(private router: Router) {}
}
