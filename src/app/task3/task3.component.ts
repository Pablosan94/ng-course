import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})
export class Task3Component implements OnInit {
  toggled = false;
  clicks = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.toggled = !this.toggled;
    this.clicks.push(new Date());
  }
}
