import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() count = 0
  @Output() change = new EventEmitter()

  increment(): void {
    this.count++
    this.change.emit(this.count)
  }

  decrement(): void {
    this.count--
    this.change.emit(this.count)
  }

}
