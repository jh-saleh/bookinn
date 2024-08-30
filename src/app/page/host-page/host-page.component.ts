import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HostCardComponent } from "../../component/card/host-card/host-card.component";
import { StayCardComponent } from "../../component/card/stay-card/stay-card.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { hostServiceFactory, stayServiceFactory } from '../../hexagonal/di-factories';
import { Host } from '../../hexagonal/domain/model/stay/host.model';
import { Stay } from '../../hexagonal/domain/model/stay/stay.model';
import { HostPort } from '../../hexagonal/domain/port/host.port';
import { StayPort } from '../../hexagonal/domain/port/stay.port';
import { CamelToSentencePipe } from '../../pipe/cameltosentence.pipe';
import { HostInformationIconPipe } from '../../pipe/icon/host-information-icon/host-information-icon.pipe';

@Component({
  selector: 'host-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, HostCardComponent, StayCardComponent, RouterModule,
    CamelToSentencePipe, HostInformationIconPipe],
  providers: [{ provide: HostPort, useFactory: hostServiceFactory }, { provide: StayPort, useFactory: stayServiceFactory }],
  templateUrl: './host-page.component.html',
  styleUrl: './host-page.component.css'
})
export class HostPageComponent implements OnInit {
  host!: Host;
  listings!: Stay[];

  constructor(private route: ActivatedRoute, private hostService: HostPort, private staysService: StayPort) {

  }

  ngOnInit(): void {
    const hostId = this.route.snapshot.paramMap.get('id');
    this.hostService.getHost(hostId ?? "").subscribe((host) => {
      if (host) {
        this.host = host
      }
    });
    this.staysService.getStays(...this.host.listings).subscribe((stays) => this.listings = stays);
  }
}