import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Location } from '@angular/common';
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
export class NavbarComponent implements OnInit {
  activeClass = false;
  isProfileActive = true;
  isProjectsActive = false;
  isTechsActive = false;
  isCompaniesActive = false;
  componentActive:string = '';
  hrefNav: string = '';

  constructor(
    private sharedService: SharedService,
    private location: Location){
  }

  ngOnInit(): void {
    this.sharedService.containerState$.subscribe((state: boolean)  => {
      this.activeClass = state;
    });
    this.sharedService.containerComponent$.subscribe((component: string)=>{
      this.componentActive = component;

      this.hrefNav = this.componentActive.replace("Style", "");
      //console.log("component active: ", this.hrefNav);
      this.location.replaceState(`#${this.hrefNav}`);
      //console.log(this.location);
    });
  }

  activateClass(href:string) {
    switch(href){
      case "profileStyle":
        this.activeClass = true;
        this.componentActive = "profileStyle";
        break;
      case "projectsStyle":
        this.activeClass = true;
        this.componentActive = "projectsStyle";
        break;
      case "techsStyle":
        this.activeClass = true;
        this.componentActive = "techsStyle";

        break;
      case "companiesStyle":
        this.activeClass = true;
        this.componentActive = "companiesStyle";
        break;
    }
  }
}
