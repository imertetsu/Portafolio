import { Component } from '@angular/core';
declare global {
  interface Math {
    easeInOutQuad(t: number, b: number, c: number, d: number): number;
  }
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isProfileActive = true;
  isProjectsActive = false;
  isTechsActive = false;
  isCompaniesActive = false;

  constructor(){

  }
  activateClass(href:string) {
    switch(href){
      case "profile":
        this.isProjectsActive = false;
        this.isProfileActive = true;
        this.isTechsActive = false;
        this.isCompaniesActive = false;
        break;
      case "projects":
        this.isProjectsActive = true;
        this.isProfileActive = false;
        this.isTechsActive = false;
        this.isCompaniesActive = false;
        break;
      case "techs":
        this.isProjectsActive = false;
        this.isProfileActive = false;
        this.isTechsActive = true;
        this.isCompaniesActive = false;
        break;
      case "companies":
        this.isProjectsActive = false;
        this.isProfileActive = false;
        this.isTechsActive = false;
        this.isCompaniesActive = true;
    }
  }

}
