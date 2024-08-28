import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  currentPage: number = 1;
  @Input({ required: true }) lastPage!: number;
  @Output() sendCurrentPage = new EventEmitter<number>();

  selectedPageHandler(page: number) {
    this.currentPage = page;
    this.sendCurrentPage.emit(this.currentPage);
  }
}