import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Company } from 'src/app/models/companies.model';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faWhatsapp, faMailchimp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faWhatsapp = faWhatsapp;
  faMailchimp = faMailchimp;
  faMailReply = faEnvelope;

  constructor(private sharedService: SharedService) {
  }

  companies: Company[] = [
    {
      name: "SnapCoding",
      image: "/assets/images/snapcoding-Logo.webp",
      alt: "snapcoding Logo",
      link: "https://snapcodingbolivia.com/"
    },
    {
      name: "Assuresoft",
      image: "/assets/images/Assuresoft_logo.webp",
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

  onMouseEnter() {
    this.sharedService.updateContainerState(true, 'companiesStyle');
  }

  onMouseLeave() {
    this.sharedService.updateContainerState(false, 'companiesStyle');
  }
}
