import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {
  username: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  isEmptyUsername() {
    return this.username.length === 0;
  }

  resetUsername() {
    this.username = '';
  }
}
