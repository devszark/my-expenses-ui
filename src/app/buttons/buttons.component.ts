import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  selected: string = 'List';

  onClick(what: string): void {
    this.selected=what;
    console.log(`Button:onClick - selected=${this.selected}`);
  }

}
