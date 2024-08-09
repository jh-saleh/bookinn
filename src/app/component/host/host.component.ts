import { Component, Input, OnInit } from '@angular/core';
import { Host } from '../../model/inn/host.model';

@Component({
  selector: 'host',
  standalone: true,
  imports: [],
  templateUrl: './host.component.html',
  styleUrl: './host.component.css'
})
export class HostComponent implements OnInit {
  @Input({ required: true }) host!: Host;
  isEfficiencyWithinHours: boolean = false;

  ngOnInit(): void {
    this.isEfficiencyWithinHours = this.host.efficiency.time.type === "hours";
  }
}
