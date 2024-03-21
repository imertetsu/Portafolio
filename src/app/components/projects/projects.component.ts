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
      id: 7,
      name: 'Pizzeria API',
      images: [
        '/assets/projects/backendPizzeria/swaggerui1.PNG',
        '/assets/projects/backendPizzeria/swaggerui2.PNG',
        '/assets/projects/backendPizzeria/swaggerui3.PNG',
      ],
      source: 'https://github.com/imertetsu/pizzeria',
      url: 'https://pizzeria.imertetsu.me/api/swagger-ui/index.html',
      projectDescription: {
        name: "Pizzeria API",
        description: "The Pizzeria API is an API designed to manage the entire ordering and management process of a pizzeria. From user management to creating and tracking pizza orders, the app offers a comprehensive solution to meet the needs of customers and staff alike.",
        features: [
          {
            name: "User Management",
            description: "The application allows the management of different types of users, including administrators, clients and chefs. Each type of user has access to specific functionalities according to their role in the system."
          },
          {
            name: "Pizza Catalog",
            description: "The platform has a wide catalog of pizzas available for customers to choose from and place their orders."
          },
          {
            name: "Pizza Orders",
            description: "Customers can place and track their pizza orders through the app. Chefs receive incoming orders and can update the preparation status of pizzas."
          },
          {
            name: "RESTful Endpoints",
            description: "The application implements RESTful endpoints to perform CRUD (Create, Read, Update, Delete) operations on key entities such as users, pizzas, and pizza orders. These endpoints support standard HTTP methods, including GET, POST, PUT, and DELETE."
          },
          {
            name: "Role-Based Security",
            description: "A robust security system has been implemented that assigns roles to users, such as administrator, customer and chef. Each role has restricted access to certain functionality and data of the application."
          },
          {
            name: "Stateless Architecture",
            description: "The application follows a stateless architecture, which means that it does not store any session state on the server. Instead, it uses JWT tokens (JSON Web Tokens) to authenticate and authorize user requests. These tokens are included in the headers of HTTP requests to maintain security and data integrity."
          },
          {
            name: "Public Endpoints",
            description: "Although most endpoints require authentication, the application also has some public endpoints that can be accessed without authentication, such as consulting the pizza catalog."
          }
        ]
      }
    },
    {
      id: 1,
      name: 'School Bus Tracker (SBT)',
      images: [
        '/assets/projects/sistemaImages/pageHome.PNG',
        '/assets/projects/sistemaImages/loginPage.PNG',
        '/assets/projects/sistemaImages/registerPage.PNG',
        '/assets/projects/sistemaImages/schoolPage.PNG',
        '/assets/projects/sistemaImages/conductoresPage.PNG',
        '/assets/projects/sistemaImages/padresPage.PNG',
        '/assets/projects/sistemaImages/busesPge.PNG',
      ],
      source: 'https://github.com/imertetsu/SchoolBusParent',
      url: null,
      projectDescription: {
        name: "Bus Escolar Tracker",
        description: "La aplicación de Pizzería es una plataforma robusta diseñada para gestionar todo el proceso de pedidos y gestión de una pizzería. Desde la administración de usuarios hasta la creación y seguimiento de órdenes de pizzas, la aplicación ofrece una solución integral para satisfacer las necesidades de clientes y personal por igual.",
        features: [
          {
            name: "Gestión de Usuarios",
            description: "La aplicación permite la gestión de distintos tipos de usuarios, incluyendo administradores, clientes y chefs. Cada tipo de usuario tiene acceso a funcionalidades específicas de acuerdo a su rol en el sistema."
          },
          {
            name: "Catálogo de Pizzas",
            description: "La plataforma cuenta con un amplio catálogo de pizzas disponibles para que los clientes elijan y realicen sus pedidos."
          },
          {
            name: "Órdenes de Pizzas",
            description: "Los clientes pueden realizar y rastrear sus órdenes de pizzas a través de la aplicación. Los chefs reciben notificaciones en tiempo real sobre los pedidos entrantes y pueden actualizar el estado de preparación de las pizzas."
          },
          {
            name: "Endpoints RESTful",
            description: "La aplicación implementa endpoints RESTful para realizar operaciones CRUD (Create, Read, Update, Delete) en entidades clave como usuarios, pizzas y órdenes de pizzas. Estos endpoints admiten los métodos HTTP estándar, incluyendo GET, POST, PUT y DELETE."
          },
          {
            name: "Seguridad Basada en Roles",
            description: "Se ha implementado un sistema de seguridad robusto que asigna roles a los usuarios, como administrador, cliente y chef. Cada rol tiene acceso restringido a ciertas funcionalidades y datos de la aplicación."
          },
          {
            name: "Arquitectura Stateless",
            description: "La aplicación sigue una arquitectura stateless, lo que significa que no almacena ningún estado de sesión en el servidor. En su lugar, utiliza tokens JWT (JSON Web Tokens) para autenticar y autorizar solicitudes de usuarios. Estos tokens se incluyen en los encabezados de las solicitudes HTTP para mantener la seguridad y la integridad de los datos."
          },
          {
            name: "Endpoints Públicos",
            description: "Aunque la mayoría de los endpoints requieren autenticación, la aplicación también cuenta con algunos endpoints públicos que pueden ser accedidos sin autenticación, como la consulta del catálogo de pizzas."
          }
        ]
      }
    },
    {
      id: 3,
      name: '(SBT) Parent App',
      images: [
        '/assets/projects/sistemaImages/appPadre/splashPadre.jpeg',
        '/assets/projects/sistemaImages/appPadre/loginPadreConductor.PNG',
        '/assets/projects/sistemaImages/appPadre/verifyCode.PNG',
        '/assets/projects/sistemaImages/appPadre/ubicacionConductorEnAppPadre.PNG',
        '/assets/projects/sistemaImages/appPadre/navegacionAppPadre.PNG',
        '/assets/projects/sistemaImages/appPadre/configuracionUbi.PNG',
        '/assets/projects/sistemaImages/appPadre/registroHijo.PNG',
      ],
      source: 'https://github.com/imertetsu/SchoolBusParent',
      url: null,
      projectDescription: {
        name: "Bus Escolar Tracker",
        description: "La aplicación de Pizzería es una plataforma robusta diseñada para gestionar todo el proceso de pedidos y gestión de una pizzería. Desde la administración de usuarios hasta la creación y seguimiento de órdenes de pizzas, la aplicación ofrece una solución integral para satisfacer las necesidades de clientes y personal por igual.",
        features: [
          {
            name: "Gestión de Usuarios",
            description: "La aplicación permite la gestión de distintos tipos de usuarios, incluyendo administradores, clientes y chefs. Cada tipo de usuario tiene acceso a funcionalidades específicas de acuerdo a su rol en el sistema."
          },
          {
            name: "Catálogo de Pizzas",
            description: "La plataforma cuenta con un amplio catálogo de pizzas disponibles para que los clientes elijan y realicen sus pedidos."
          },
          {
            name: "Órdenes de Pizzas",
            description: "Los clientes pueden realizar y rastrear sus órdenes de pizzas a través de la aplicación. Los chefs reciben notificaciones en tiempo real sobre los pedidos entrantes y pueden actualizar el estado de preparación de las pizzas."
          },
          {
            name: "Endpoints RESTful",
            description: "La aplicación implementa endpoints RESTful para realizar operaciones CRUD (Create, Read, Update, Delete) en entidades clave como usuarios, pizzas y órdenes de pizzas. Estos endpoints admiten los métodos HTTP estándar, incluyendo GET, POST, PUT y DELETE."
          },
          {
            name: "Seguridad Basada en Roles",
            description: "Se ha implementado un sistema de seguridad robusto que asigna roles a los usuarios, como administrador, cliente y chef. Cada rol tiene acceso restringido a ciertas funcionalidades y datos de la aplicación."
          },
          {
            name: "Arquitectura Stateless",
            description: "La aplicación sigue una arquitectura stateless, lo que significa que no almacena ningún estado de sesión en el servidor. En su lugar, utiliza tokens JWT (JSON Web Tokens) para autenticar y autorizar solicitudes de usuarios. Estos tokens se incluyen en los encabezados de las solicitudes HTTP para mantener la seguridad y la integridad de los datos."
          },
          {
            name: "Endpoints Públicos",
            description: "Aunque la mayoría de los endpoints requieren autenticación, la aplicación también cuenta con algunos endpoints públicos que pueden ser accedidos sin autenticación, como la consulta del catálogo de pizzas."
          }
        ]
      }
    },
    {
      id: 1,
      name: '(SBT) Driver App',
      images: [
        '/assets/projects/sistemaImages/appConductor/splashCond.jpeg',
        '/assets/projects/sistemaImages/appConductor/loginPadreConductor.PNG',
        '/assets/projects/sistemaImages/appConductor/verifyCode.PNG',
        '/assets/projects/sistemaImages/appConductor/navegacionConductor.jpeg',
        '/assets/projects/sistemaImages/appConductor/ubicacionConductor.jpeg',
        '/assets/projects/sistemaImages/appConductor/registroChild.jpeg',
      ],
      source: 'https://github.com/imertetsu/SchoolBusParent',
      url: null,
      projectDescription: {
        name: "Bus Escolar Tracker",
        description: "La aplicación de Pizzería es una plataforma robusta diseñada para gestionar todo el proceso de pedidos y gestión de una pizzería. Desde la administración de usuarios hasta la creación y seguimiento de órdenes de pizzas, la aplicación ofrece una solución integral para satisfacer las necesidades de clientes y personal por igual.",
        features: [
          {
            name: "Gestión de Usuarios",
            description: "La aplicación permite la gestión de distintos tipos de usuarios, incluyendo administradores, clientes y chefs. Cada tipo de usuario tiene acceso a funcionalidades específicas de acuerdo a su rol en el sistema."
          },
          {
            name: "Catálogo de Pizzas",
            description: "La plataforma cuenta con un amplio catálogo de pizzas disponibles para que los clientes elijan y realicen sus pedidos."
          },
          {
            name: "Órdenes de Pizzas",
            description: "Los clientes pueden realizar y rastrear sus órdenes de pizzas a través de la aplicación. Los chefs reciben notificaciones en tiempo real sobre los pedidos entrantes y pueden actualizar el estado de preparación de las pizzas."
          },
          {
            name: "Endpoints RESTful",
            description: "La aplicación implementa endpoints RESTful para realizar operaciones CRUD (Create, Read, Update, Delete) en entidades clave como usuarios, pizzas y órdenes de pizzas. Estos endpoints admiten los métodos HTTP estándar, incluyendo GET, POST, PUT y DELETE."
          },
          {
            name: "Seguridad Basada en Roles",
            description: "Se ha implementado un sistema de seguridad robusto que asigna roles a los usuarios, como administrador, cliente y chef. Cada rol tiene acceso restringido a ciertas funcionalidades y datos de la aplicación."
          },
          {
            name: "Arquitectura Stateless",
            description: "La aplicación sigue una arquitectura stateless, lo que significa que no almacena ningún estado de sesión en el servidor. En su lugar, utiliza tokens JWT (JSON Web Tokens) para autenticar y autorizar solicitudes de usuarios. Estos tokens se incluyen en los encabezados de las solicitudes HTTP para mantener la seguridad y la integridad de los datos."
          },
          {
            name: "Endpoints Públicos",
            description: "Aunque la mayoría de los endpoints requieren autenticación, la aplicación también cuenta con algunos endpoints públicos que pueden ser accedidos sin autenticación, como la consulta del catálogo de pizzas."
          }
        ]
      }
    },
    {
      id: 6,
      name: 'Lenguas OEI',
      images: [
        '/assets/projects/lenguasOei/backgroundOei.PNG',
        '/assets/projects/lenguasOei/pageIni.PNG',
        '/assets/projects/lenguasOei/loginPage.PNG',
        '/assets/projects/lenguasOei/registerPage.PNG',
        '/assets/projects/lenguasOei/languagesPage.PNG',

      ],
      source: null,
      url: 'https://lenguas-ui.languages.imertetsu.me/',
      projectDescription: {
        name: "Aplicación de Pizzería",
        description: "The Pizzeria application is a platform designed to manage the entire ordering and management process of a pizzeria. From user management to creating and tracking pizza orders, the app offers a comprehensive solution to meet the needs of customers and staff alike.",
        features: [
          {
            name: "Gestión de Usuarios",
            description: "La aplicación permite la gestión de distintos tipos de usuarios, incluyendo administradores, clientes y chefs. Cada tipo de usuario tiene acceso a funcionalidades específicas de acuerdo a su rol en el sistema."
          },
          {
            name: "Catálogo de Pizzas",
            description: "La plataforma cuenta con un amplio catálogo de pizzas disponibles para que los clientes elijan y realicen sus pedidos."
          },
          {
            name: "Órdenes de Pizzas",
            description: "Los clientes pueden realizar y rastrear sus órdenes de pizzas a través de la aplicación. Los chefs reciben notificaciones en tiempo real sobre los pedidos entrantes y pueden actualizar el estado de preparación de las pizzas."
          },
          {
            name: "Endpoints RESTful",
            description: "La aplicación implementa endpoints RESTful para realizar operaciones CRUD (Create, Read, Update, Delete) en entidades clave como usuarios, pizzas y órdenes de pizzas. Estos endpoints admiten los métodos HTTP estándar, incluyendo GET, POST, PUT y DELETE."
          },
          {
            name: "Seguridad Basada en Roles",
            description: "Se ha implementado un sistema de seguridad robusto que asigna roles a los usuarios, como administrador, cliente y chef. Cada rol tiene acceso restringido a ciertas funcionalidades y datos de la aplicación."
          },
          {
            name: "Arquitectura Stateless",
            description: "La aplicación sigue una arquitectura stateless, lo que significa que no almacena ningún estado de sesión en el servidor. En su lugar, utiliza tokens JWT (JSON Web Tokens) para autenticar y autorizar solicitudes de usuarios. Estos tokens se incluyen en los encabezados de las solicitudes HTTP para mantener la seguridad y la integridad de los datos."
          },
          {
            name: "Endpoints Públicos",
            description: "Aunque la mayoría de los endpoints requieren autenticación, la aplicación también cuenta con algunos endpoints públicos que pueden ser accedidos sin autenticación, como la consulta del catálogo de pizzas."
          }
        ]
      }
    }
  ]

  onMouseEnter() {
    this.sharedService.updateContainerState(true, 'projectsStyle');
  }

  onMouseLeave() {
    this.sharedService.updateContainerState(false, 'projectsStyle');
  }
}
