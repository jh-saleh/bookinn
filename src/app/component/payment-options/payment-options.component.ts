import { Component, EventEmitter, Input } from '@angular/core';
import { PaymentMethod } from '../../hexagonal/domain/model/enum/payment.enum';

@Component({
  selector: 'payment-options',
  standalone: true,
  imports: [],
  templateUrl: './payment-options.component.html',
  styleUrl: './payment-options.component.css'
})
export class PaymentOptionsComponent {
  @Input({ required: true }) set initPrice(price: number) {
    this.fullPrice = price;
    this.halfPrice = Math.ceil(price / 2);
    this.thirdPrice = Math.ceil(price / 3);
  };
  fullPrice: number = 0;
  halfPrice: number = 0;
  thirdPrice: number = 0;
  choice: PaymentMethod = 0;
  choices: PaymentMethod[] = [PaymentMethod.FullPayment, PaymentMethod.HalfPayment, PaymentMethod.ThreePayments];
  sendChoice = new EventEmitter<PaymentMethod>();

  focusPaymentRadioInput(inputRadioRef: HTMLInputElement, paymentMethod: PaymentMethod) {
    inputRadioRef.click();
    this.choice = paymentMethod;
    this.sendChoice.emit(this.choice);
  }
}
