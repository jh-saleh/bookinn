import { Component, EventEmitter, Input, Output } from '@angular/core';

type CounterButtonType = 'increase' | 'decrease';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 0;
  @Input({ required: true }) maximum: number = 16;
  @Input({ required: true }) minimum: number = 0;
  @Output() sendCounter = new EventEmitter<number>();

  increase() {
    this.counter++;
    this.sendCounter.emit(this.counter);
  }

  decrease() {
    this.counter--;
    this.sendCounter.emit(this.counter);
  }
}
