import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Company } from 'src/app/models/companies.model';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  companies: Company[] = [
    {
      name: "SnapCoding",
      image: "/assets/images/snapcoding-Logo.webp",
      alt: "snapcoding Logo",
      link: "https://snapcodingbolivia.com/"
    },
    {
      name: "Assuresoft",
      image: "/assets/images/assureLogo.webp",
      alt: "assuresoft Logo",
      link: "https://www.assuresoft.com/"
    },
    {
      name: "OEI",
      image: "/assets/images/oei.png",
      alt: "OEI Logo",
      link: "https://oei.int/"
    }
  ];

  constructor(private sharedService: SharedService){}

  onMouseEnter() {
    this.sharedService.updateContainerState(true, 'companiesStyle');
  }

  onMouseLeave() {
    this.sharedService.updateContainerState(false, 'companiesStyle');
  }
}
