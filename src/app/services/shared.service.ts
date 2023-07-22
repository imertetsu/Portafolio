import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService{

  constructor() { }
  private containerState = new BehaviorSubject<boolean>(false);
  private containerComponent = new BehaviorSubject<string>('');
  // Observable para que los componentes puedan suscribirse y recibir actualizaciones
  containerState$ = this.containerState.asObservable();
  containerComponent$ = this.containerComponent.asObservable();
  // Método para actualizar el estado de la sección container
  updateContainerState(state: boolean, component: string) {
    this.containerState.next(state);
    this.containerComponent.next(component);
  }
}
