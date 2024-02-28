import { Component } from '@angular/core';

@Component({
  selector: 'app-fullname',
  templateUrl: './fullname.component.html',
  styleUrl: './fullname.component.css'
})
export class FullnameComponent {
  n1: number = 0;
  n2: number = 0;
  sum: number = 0;

  calculator(){
    this.sum = this.n1 + this.n2;
  }

}
