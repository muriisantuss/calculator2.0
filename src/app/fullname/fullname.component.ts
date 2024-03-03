import { Component } from '@angular/core';

@Component({
  selector: 'app-fullname',
  templateUrl: './fullname.component.html',
  styleUrl: './fullname.component.css',
})
export class FullnameComponent {
  n1: any;
  n2: any;
  sum: any = 0;
  validationError: boolean = false;

  inputReset() {
    if (!this.n1 || !this.n2) {
      this.validationError = true;
      this.sum = 0;
      return;
    } else {
      this.validationError = false;
      return;
    }
  }

  calculator(operation: number = 0) {
    if (operation == 1) {
      this.sum = this.n1 + this.n2;
      this.n1 = null;
      this.n2 = null;
      return;
    } else if (operation == 2) {
      this.sum = this.n1 - this.n2;
      this.n1 = null;
      this.n2 = null;
      return;
    } else if (operation == 3) {
      this.sum = this.n1 * this.n2;
      this.n1 = null;
      this.n2 = null;
      return;
    } else if (operation == 4) {
      this.sum = this.n1 / this.n2;
      this.n1 = null;
      this.n2 = null;
      return;
    }
  }
}
