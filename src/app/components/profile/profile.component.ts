import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit, OnInit {
  typingElements: HTMLCollectionOf<Element>;
  typingArray: any[];
  typeElement: HTMLElement | null;
  terminalText!: string[];
  activeButton = false;
  activeShowMore = true;

  constructor(private sharedService: SharedService) {
    this.typeElement = document.getElementById('type');
    this.typingElements = document.getElementsByClassName('type');
    this.typingArray = [];
    this.terminalText = [
      '√ Compiled successfully.',
      '√ Browser application bundle generation complete.',
      `Hi, I'm Imer Coaguila 👋🏻`,
      `💻 Software Developer`,
      'Show more...',
    ]
  }
  clickFirstTimeLoadMore(){
    this.activeButton = !this.activeButton;
  }
  clickLoadMore(){
    this.activeShowMore = !this.activeShowMore;
    this.activeButton = !this.activeButton;
  }

  addElementstoList(){
    for (let i = 0; i < this.typingElements.length; i++) {
      this.typingArray.push(this.typingElements[i]);
    }
  }
  // Recorrer los elementos y agregar la clase "active" para activar la animación
  addClassActive(index: number = 0) {
    if (index < this.typingArray.length) {
      const element = this.typingArray[index];
      element.innerHTML = this.terminalText[index];
      element.classList.add('text');

      setTimeout(() => {
        element.classList.remove('text');
        this.addClassActive(index + 1);
      }, 1000);
    }
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.addClassActive();
    }, 0);
  }

  ngAfterViewInit(): void {
    this.addElementstoList();
    setTimeout(() => {
      this.typeElement = document.getElementById('type');
      this.typeElement?.classList.add('text');
    }, 0);
  }
  onMouseEnter() {
    this.sharedService.updateContainerState(true, 'profileStyle');
  }

  onMouseLeave() {
    this.sharedService.updateContainerState(false, 'profileStyle');
  }
}
