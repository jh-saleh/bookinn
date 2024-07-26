import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fullview-modal',
  standalone: true,
  imports: [],
  templateUrl: './fullview-modal.component.html',
  styleUrl: './fullview-modal.component.css'
})
export class FullviewModalComponent {
  @Input({ required: true })
  isModalOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() openModal = new EventEmitter<void>();

  closeModalIfClickedOutSide() {
    this.closeModal.emit();
  }

  closeModalHandler(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
  }
}