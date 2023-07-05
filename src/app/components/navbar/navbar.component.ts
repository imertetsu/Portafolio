import { Component, OnInit } from '@angular/core';
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

  isProfileActive = true;
  isProjectsActive = false;
  isTechsActive = false;
  isCompaniesActive = false;

  constructor(){

  }

  ngOnInit(): void {
    this.addScroll();
  }

  addScroll(){
    document.addEventListener('DOMContentLoaded', function() {
      // Seleccionar todos los enlaces con la clase "smooth-scroll"
      const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

      // Manejar el evento de clic en cada enlace
      smoothScrollLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
          // Prevenir el comportamiento predeterminado de navegación
          e.preventDefault();

          // Obtener el ID de la sección objetivo del atributo href del enlace
          const targetId:any = link.getAttribute('href');

          // Obtener la posición actual de desplazamiento vertical
          const currentPosition = window.pageYOffset;

          // Obtener la posición vertical de la sección objetivo
          const targetPosition = document.querySelector(targetId).offsetTop;

          const distance = targetPosition - currentPosition;

          // Calcular la distancia a desplazarse


          // Duración de la animación en milisegundos
          const duration = 500;

          // Función para realizar el desplazamiento suave con animación
          const smoothScroll = function(start:any, end:any, duration:any) {
            let currentTime = 0;
            const increment = 20;

            const animateScroll = function() {
              currentTime += increment;
              const ease = Math.easeInOutQuad(currentTime, start, end - start, duration);
              window.scrollTo(0, ease);
              if (currentTime < duration) {
                setTimeout(animateScroll, increment);
              }
            };

            animateScroll();
          };

          // Iniciar el desplazamiento suave
          smoothScroll(currentPosition, targetPosition, duration);
        });
      });
    });

    // Función para calcular el valor de la función easing
    Math.easeInOutQuad = function(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
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
