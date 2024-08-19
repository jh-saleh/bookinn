import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HostService } from '../../IoC/service/host.service';
import { StaysService } from '../../IoC/service/stay.service';
import { HostCardComponent } from "../../component/card/host-card/host-card.component";
import { RoomCardComponent } from "../../component/card/room-card/room-card.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { Host } from '../../model/stay/host.model';
import { Stay } from '../../model/stay/stay.model';
import { CamelToSentencePipe } from '../../pipe/cameltosentence.pipe';
import { HostInformationIconPipe } from '../../pipe/icon/host-information-icon/host-information-icon.pipe';

@Component({
  selector: 'host-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, HostCardComponent, RoomCardComponent, RouterModule,
    CamelToSentencePipe, HostInformationIconPipe],
  providers: [HostService, StaysService],
  templateUrl: './host-page.component.html',
  styleUrl: './host-page.component.css'
})
export class HostPageComponent implements OnInit {
  host!: Host;
  listings!: Stay[];

  constructor(private route: ActivatedRoute, private hostService: HostService, private staysService: StaysService) {

  }

  ngOnInit(): void {
    const hostId = this.route.snapshot.paramMap.get('id');
    this.host = this.hostService.getHost(hostId ?? "");
    this.listings = this.staysService.getStays(...this.host.listings);
  }
}
