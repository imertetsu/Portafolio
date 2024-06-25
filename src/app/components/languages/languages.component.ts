import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {
  constructor(private sharedService: SharedService){}

  images = [
    {
      image: '/assets/images/languages/java.webp',
      imageTitle: 'Java'
    },
    {
      image: '/assets/images/languages/spring.webp',
      imageTitle: 'Spring'
    },
    {
      image: '/assets/images/languages/mysql.png',
      imageTitle: 'MySQL Database'
    },
    {
      image: '/assets/images/languages/aws.webp',
      imageTitle: 'AWS'
    },
    {
      image: '/assets/images/languages/apache-kafka.png',
      imageTitle: 'Apache Kafka'
    },
    {
      image: '/assets/images/languages/file-type-angular.svg',
      imageTitle: 'Angular'
    },
    {
      image: '/assets/images/languages/python.png',
      imageTitle: 'Python'
    },
    {
      image: '/assets/images/languages/apache-spark.png',
      imageTitle: 'Apache Spark'
    },
    {
      image: '/assets/images/languages/js.webp',
      imageTitle: 'JavaScript'
    },
    {
      image: '/assets/images/languages/typescript.webp',
      imageTitle: 'TypeScript'
    },
    {
      image: '/assets/images/languages/docker.webp',
      imageTitle: 'Docker'
    },
    {
      image: '/assets/images/languages/github.webp',
      imageTitle: 'Github'
    },
    {
      image: '/assets/images/languages/gitlab.png',
      imageTitle: 'Gitlab'
    },
  ]

  onMouseEnter() {
    this.sharedService.updateContainerState(true, 'techsStyle');
  }

  onMouseLeave() {
    this.sharedService.updateContainerState(false, 'techsStyle');
  }
}
