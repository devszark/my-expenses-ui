import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  selected?: string;

  onClick(what: string): void {
    if (!this.selected){
      this.selected=what;
    } else {
      if (this.selected===what) {
        this.selected=undefined;
      } else this.selected=what;
    }
    console.log(`Button:onClick - selected=${this.selected}`);
  }

}
