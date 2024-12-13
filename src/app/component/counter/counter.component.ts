import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 0;
  @Input({ required: false }) set initValue(value: number) {
    this.counter = value;
  };
  @Input({ required: true }) maximum: number = 16;
  private _minimum: number = 0;
  @Input({ required: true }) set minimum(value: number) {
    this._minimum = value;
    if (this.minimum > this.counter) {
      this.counter = this.minimum;
      this.sendCounter.emit(this.counter);
    }
  };
  get minimum(): number {
    return this._minimum;
  }
  @Input() blockIncreaseAction: boolean = false;
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
