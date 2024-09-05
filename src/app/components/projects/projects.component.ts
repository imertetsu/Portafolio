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
        '/assets/projects/backendPizzeria/swaggerui1.webp',
        '/assets/projects/backendPizzeria/swaggerui2.webp',
        '/assets/projects/backendPizzeria/swaggerui3.webp',
      ],
      source: 'https://github.com/imertetsu/pizzeria',
      url: 'https://service.pizzeria.imertetsu.me/api/swagger-ui/index.html',
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
      source: null,
      url: "https://service.busescolartracking.imertetsu.me",
      projectDescription: {
        name: "School Bus Tracker",
        description: "The School Bus Tracker is a system designed to connect two main applications: the parent app and the driver app. Its main purpose is to facilitate school route management, allowing drivers to transmit their real-time location through the driver app, and parents to view this location in the parent app.",
        "features": [
          {
            name: "Schools, Drivers, and Parents Management",
            description: "The application allows registering and managing information about schools, drivers, and parents. This includes details such as names, contacts, and specific route and schedule assignments."
          },
          {
            name: "Real-Time Location Broadcasting",
            description: "Drivers can broadcast their real-time location through the driver app. This information is constantly updated and available for viewing by parents in the parent app."
          },
          {
            name: "School Route Tracking",
            description: "Parents can track school bus routes in real-time through the parent app. This allows them to know the current location of the bus and estimate arrival time at the designated stop."
          },
          // {
          //   name: "Alerts and Notifications",
          //   description: "The application can send alerts and notifications to parents about important events related to school routes, such as changes in departure times, late arrivals, or route cancellations."
          // },
          {
            name: "Security and Privacy",
            description: "Security measures are implemented to protect users' personal information, such as contact details and locations. Proper authentication and authorization ensure that only authorized users can access relevant information."
          },
          {
            name: "Intuitive and User-Friendly Interface",
            description: "Both the parent app and the driver app feature intuitive and user-friendly interfaces. This facilitates navigation and use of the available functionalities for users."
          },
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
      source: null,
      url: null,
      projectDescription: {
        name: "Parent App",
        description: "The Parent App is an integral part of the School Bus Tracker system, providing parents with essential features to ensure the safety and convenience of their children's transportation to and from school. Parents can log in using a registered phone number, enabling access to various functionalities designed to enhance their experience and peace of mind.",
        features: [
          {
            name: "Phone Number Authentication",
            description: "Parents can log in securely using their registered phone number, ensuring that only authorized users have access to the application."
          },
          {
            name: "Real-Time School Bus Location",
            description: "Parents can view the real-time location of the school bus on a map within the app. This feature enables them to track the bus's progress and estimate arrival times accurately."
          },
          {
            name: "Pickup and Drop-off Location Management",
            description: "Parents can set specific pickup and drop-off locations for their child within the app. This ensures that the bus driver knows exactly where to pick up and drop off the student, enhancing safety and efficiency."
          },
          {
            name: "Student Entry and Exit Records",
            description: "The app maintains records of student entries and exits from the school bus, including timestamps and location details. This provides parents with valuable insights into their child's transportation habits and ensures accountability."
          },
          {
            name: "User-Friendly Interface",
            description: "The Parent App features a user-friendly interface designed for easy navigation and accessibility. Parents can quickly access relevant information and perform necessary actions without complications."
          },
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
      source: null,
      url: null,
      projectDescription: {
        name: "Driver App",
        description: "The Driver App plays a crucial role in the School Bus Tracker system, empowering bus drivers with essential tools to ensure the smooth and safe transportation of students. Drivers can log in using their registered phone number, granting access to features designed to streamline their workflow and enhance their efficiency.",
        features: [
          {
            name: "Phone Number Authentication",
            description: "Drivers can securely log in using their registered phone number, ensuring that only authorized personnel have access to the app's functionalities."
          },
          {
            name: "Real-Time Location Tracking",
            description: "The app enables drivers to view their current location as well as the locations of the schools they serve and the students' pickup/drop-off points. This feature aids drivers in navigating their routes efficiently and ensuring timely arrivals and departures."
          },
          {
            name: "Student Entry and Exit Logging",
            description: "Drivers can log entries and exits of students on their bus, recording timestamps and location details. These records are synchronized with the Parent App, allowing parents to track their child's bus activities in real-time."
          },
          // {
          //   name: "Route Optimization",
          //   description: "The Driver App provides route optimization functionalities to help drivers plan the most efficient routes, minimizing travel time and fuel consumption. This ensures timely pickups and drop-offs while optimizing overall transportation efficiency."
          // },
          // {
          //   name: "Communication with Parents",
          //   description: "Drivers can communicate with parents via the app, providing updates on route changes, delays, or emergencies. This facilitates transparent communication between drivers and parents, fostering trust and confidence in the transportation system."
          // },
          {
            name: "User-Friendly Interface",
            description: "The Driver App features an intuitive interface designed for ease of use and accessibility. Drivers can access essential features and information quickly, allowing them to focus on their primary task of safe and efficient driving."
          },
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
      url: 'https://ui.languages.imertetsu.me',
      projectDescription: {
        name: "Lenguas OEI",
        description: "Lenguas OEI is a project that belongs to the OEI organization focused on promoting the learning and preservation of indigenous languages such as Aymara, Guarani, Moxeño Quechua, among others. The project aims to provide resources and tools for individuals to learn and appreciate these languages, fostering cultural diversity and linguistic heritage. Some tasks I performed during this project were: ",
        features: [
          {
            name: "Dockerization of System Components",
            description: "I dockerized the system service, backend, frontend, and database components, enabling seamless deployment to production environments. This containerization approach ensures consistency and reliability across different deployment environments."
          },
          {
            name: "Website Enhancement",
            description: "I updated various visual elements of the website, including colors, logos, fonts, styles, and more. These enhancements aimed to improve the overall user experience and align the website's design with the project's branding and objectives."
          },
          {
            name: "Feature Development and Bug Fixes",
            description: "I contributed to the development of new features, addressing user needs and requirements. Additionally, I identified and resolved bugs within the system, ensuring its stability and functionality."
          },
          {
            name: "Code Refactoring",
            description: "I conducted code refactoring activities to improve the codebase's readability, maintainability, and performance. By restructuring and optimizing existing code, I enhanced the overall quality and efficiency of the system."
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
