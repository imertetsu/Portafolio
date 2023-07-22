import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
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

  constructor(private sharedService: SharedService){

  }

  ngOnInit(): void {
    this.sharedService.containerState$.subscribe((state: boolean)  => {
      this.activeClass = state;
    });
    this.sharedService.containerComponent$.subscribe((component: string)=>{
      this.componentActive = component;
    })
  }

  activateClass(href:string) {

    switch(href){
      case "profile":
        this.activeClass = true;
        this.componentActive = "profile";
        break;
      case "projects1":
        this.activeClass = true;
        this.componentActive = "projects1";
        break;
      case "techs":
        this.activeClass = true;
        this.componentActive = "techs";
        break;
      case "companies":
        this.activeClass = true;
        this.componentActive = "companies";
        break;
    }
  }
}
