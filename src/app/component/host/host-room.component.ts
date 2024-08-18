import { Component, Input, OnInit } from '@angular/core';
import { Host } from '../../model/stay/host.model';
import { HostCardComponent } from "../card/host-card/host-card.component";

@Component({
  selector: 'host-room',
  standalone: true,
  imports: [HostCardComponent],
  templateUrl: './host-room.component.html',
  styleUrl: './host-room.component.css'
})
export class HostRoomComponent implements OnInit {
  @Input({ required: true }) host!: Host;
  isEfficiencyWithinHours: boolean = false;
  hostURL!: string;

  ngOnInit(): void {
    this.isEfficiencyWithinHours = this.host.efficiency.time.type === "hours";
    this.hostURL = `/host/${this.host.id}`;
  }
}
