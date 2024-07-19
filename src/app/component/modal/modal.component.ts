import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { css } from '@emotion/css';
import { Position } from '../../model/position/position.model';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input({ required: true })
  isModalOpen: boolean = false;

  @Output() closeModal = new EventEmitter<void>();
  @Output() openModal = new EventEmitter<void>();

  _classPosition: string = css``;
  @Input({ required: true }) set classPosition({ top, left, right }: Partial<Position>) {
    this._classPosition = css`
      top:${top}px;
      ${left !== undefined ? `left:${left}px` : `right:${right}px`};
    `;
  };
  get classPosition(): string {
    return this._classPosition;
  }

  modalWrapperHandler() {
    this.closeModal.emit();
  }

  modalHandler(event: MouseEvent) {
    event.stopPropagation();
  }
}