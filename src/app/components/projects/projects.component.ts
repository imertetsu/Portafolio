import { Component } from '@angular/core';

import { Project } from 'src/app/models/project.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor(private sharedService: SharedService) {

  }


  projectImages: Project[] = [
    {
      id: 1,
      name: 'Bus Escolar Tracker',
      images: [
        '/assets/projects/sistemaImages/appPadre/splashPadre.jpeg',
        '/assets/projects/sistemaImages/appPadre/loginPadreConductor.PNG',
        '/assets/projects/sistemaImages/appPadre/verifyCode.PNG',
        '/assets/projects/sistemaImages/appPadre/ubicacionConductorEnAppPadre.PNG',
        '/assets/projects/sistemaImages/appPadre/navegacionAppPadre.PNG',
        '/assets/projects/sistemaImages/appPadre/configuracionUbi.PNG',
        '/assets/projects/sistemaImages/appPadre/registroHijo.PNG',
      ],
      source: 'https://github.com/imertetsu/SchoolBusParent'
    },
    {
      id: 2,
      name: 'Backend Online Store',
      images: [
        '/assets/projects/backendOnlineStore/products.png',
        '/assets/projects/backendOnlineStore/categories.png',
        '/assets/projects/backendOnlineStore/users.png',
      ],
      source: 'https://github.com/imertetsu/backend-onlineStore'
    },
    {
      id: 3,
      name: 'Frontend Online Store',
      images: [
        '/assets/projects/frontendOnlineStore/products.png',
        '/assets/projects/frontendOnlineStore/categories.png',
        '/assets/projects/frontendOnlineStore/login.png',
        '/assets/projects/frontendOnlineStore/logged.png',
      ],
      source: 'https://github.com/imertetsu/frontOnlineStore'
    },
    {
      id: 4,
      name: 'Ninio Mensajero',
      images: [
        '/assets/projects/ninioMensajero/home.png',
        '/assets/projects/ninioMensajero/chooseChar.png',
        '/assets/projects/ninioMensajero/sendLetter.png',
        '/assets/projects/ninioMensajero/answerLetter.png',
        '/assets/projects/ninioMensajero/cms.png',
      ],
      source: 'https://github.com/imertetsu/ninio-mensajero'
    },
    {
      id: 5,
      name: 'Biblioteca Virtual UMSS',
      images: [
        '/assets/projects/bibliotecaVirtual/library.avif',
      ],
      source: 'https://github.com/imertetsu/biblioteca'
    }
  ]

  onMouseEnter() {
    this.sharedService.updateContainerState(true, 'projects1');
  }

  onMouseLeave() {
    this.sharedService.updateContainerState(false, 'projects1');
  }
}
