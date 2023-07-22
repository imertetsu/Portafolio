import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private sharedService: SharedService){}

  onMouseEnter() {
    this.sharedService.updateContainerState(true, 'companies');
  }

  onMouseLeave() {
    this.sharedService.updateContainerState(false, '');
  }
}
