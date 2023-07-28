import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {
  constructor(private sharedService: SharedService){}

  images = [
    '/assets/images/languages/js.png',
    '/assets/images/languages/typescript.png',
    '/assets/images/languages/nodejs.png',
    '/assets/images/languages/expressIcon.png',
    '/assets/images/languages/java.png',
    '/assets/images/languages/spring.png',
    '/assets/images/languages/file-type-angular.svg',
    '/assets/images/languages/heroku_original_wordmark_logo_icon_146482.png',
    '/assets/images/languages/docker.webp',
    '/assets/images/languages/github.png'
  ]

  onMouseEnter() {
    this.sharedService.updateContainerState(true, 'techs');
  }

  onMouseLeave() {
    this.sharedService.updateContainerState(false, '');
  }
}
