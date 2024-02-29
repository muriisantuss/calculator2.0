import { Component } from '@angular/core';

@Component({
  selector: 'app-fullname',
  templateUrl: './fullname.component.html',
  styleUrl: './fullname.component.css',
})
export class FullnameComponent {
  n1: any;
  n2: any;
  sum: any;

  calculator(operation: any) {
    if (operation == 1) {
      return (this.sum = this.n1 + this.n2);
    } else if (operation == 2) {
      return (this.sum = this.n1 - this.n2);
    } else if (operation == 3) {
      return (this.sum = this.n1 * this.n2);
    } else if (operation == 4) {
      return (this.sum = this.n1 / this.n2);
    } else {
      return;
    }
  }
}
