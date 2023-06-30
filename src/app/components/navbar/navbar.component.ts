import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showMenu = false;


  constructor(
    ){

  }

  displayMenu(){
    this.showMenu = true;
    console.log("menu abierto "+this.showMenu);
  }
  closeMenu(){
    this.showMenu = false;
    console.log("menu cerrado "+this.showMenu);
  }
}
