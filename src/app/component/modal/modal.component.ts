import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
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
  @ViewChild('modalRef') modalRef: ElementRef<HTMLDivElement> | undefined;

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

  // listener au niveau du dom complet pour détecter un click hors composant / modal
  @HostListener('document:click', ['$event.target']) onClick(target: Node | null) {
    if (this.modalRef && !this.modalRef.nativeElement.contains(target) && this.isModalOpen) {
      this.closeModal.emit();
    }
  }
}