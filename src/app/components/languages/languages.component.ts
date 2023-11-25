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
    '/assets/images/languages/js.webp',
    '/assets/images/languages/typescript.webp',
    '/assets/images/languages/nodejs.webp',
    '/assets/images/languages/expressIcon.webp',
    '/assets/images/languages/java.webp',
    '/assets/images/languages/spring.webp',
    '/assets/images/languages/file-type-angular.svg',
    '/assets/images/languages/heroku.webp',
    '/assets/images/languages/docker.webp',
    '/assets/images/languages/github.webp',
    '/assets/images/languages/gitlab.png'
  ]

  onMouseEnter() {
    this.sharedService.updateContainerState(true, 'techsStyle');
  }

  onMouseLeave() {
    this.sharedService.updateContainerState(false, 'techsStyle');
  }
}
