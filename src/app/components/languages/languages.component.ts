import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {
  constructor(private sharedService: SharedService){}

  onMouseEnter() {
    this.sharedService.updateContainerState(true, 'techs');
  }

  onMouseLeave() {
    this.sharedService.updateContainerState(false, '');
  }
}
