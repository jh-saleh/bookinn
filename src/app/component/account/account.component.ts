import { Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Position } from '../../hexagonal/domain/model/position/position.model';
import { ModalComponent } from '../windows/modal/modal.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  isAccountModalOpen: boolean = false;
  buttonPosition: Position = { top: 0, left: 0 };
  @ViewChild("accountRef") accountRef: ElementRef<HTMLSpanElement> | undefined;
  readonly portfolioURL: string = environment.portfolioURL;

  closeAccountModal(): void {
    this.isAccountModalOpen = false;
  }

  openAccountModal(): void {
    this.updateModalPosition();
    this.isAccountModalOpen = true;
  }

  updateModalPosition() {
    if (this.accountRef) {
      const { top, height, right } = this.accountRef.nativeElement.getBoundingClientRect();
      this.buttonPosition = { top: top + height + 10, right: window.innerWidth - right };
    }
  }
}