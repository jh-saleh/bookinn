import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'animated-input',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AnimatedInputComponent),
      multi: true
    }
  ],
  templateUrl: './animated-input.component.html',
  styleUrl: './animated-input.component.css'
})
export class AnimatedInputComponent implements ControlValueAccessor {
  @Input({ required: true }) label!: string;
  @ViewChild("inputRef") inputRef!: ElementRef<HTMLInputElement>;
  value: string = "";
  isAnimatedTextAbove: boolean = false;
  @Input({ required: false }) hasError: boolean = false;
  @Input({ required: false }) type: "text" | "password" = "text";

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Handle the disabled state if needed
  }

  onInput(event: any): void {
    const value = event.target.value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
    this.isAnimatedTextAbove = this.value.length > 0;
  }

  focusAnimatedInput() {
    this.inputRef.nativeElement.focus();
  }

  blurAnimatedInput() {
  }
}
