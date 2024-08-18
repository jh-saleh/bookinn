import { Component, Input } from '@angular/core';
import { Host } from '../../../model/stay/host.model';

@Component({
  selector: 'host-card',
  standalone: true,
  imports: [],
  templateUrl: './host-card.component.html',
  styleUrl: './host-card.component.css'
})
export class HostCardComponent {
  @Input({ required: true }) host!: Host;

}
