import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { HTMLBodyActions } from '../../state/htmlBody/htmlBody.actions';

@Component({
  selector: 'app-fullview-modal',
  standalone: true,
  imports: [],
  templateUrl: './fullview-modal.component.html',
  styleUrl: './fullview-modal.component.css'
})
export class FullviewModalComponent {
  private _isModalOpen: boolean = false;
  @Input({ required: true }) set isModalOpen(value: boolean) {
    this._isModalOpen = value;
    if (this._isModalOpen) {
      this.store.dispatch(HTMLBodyActions.lockHTMLBody());
    } else {
      this.store.dispatch(HTMLBodyActions.unlockHTMLBody());
    }

  };
  get isModalOpen() {
    return this._isModalOpen;
  }

  @Output() closeModal = new EventEmitter<void>();
  @Output() openModal = new EventEmitter<void>();

  constructor(private store: Store<AppState>) {

  }

  closeModalIfClickedOutSide() {
    this.closeModal.emit();
  }

  closeModalHandler(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
  }
}