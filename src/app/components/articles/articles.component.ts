import { Component } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  constructor(private sharedService: SharedService) {
  }

  articles: Article[] = [
    {
      id: 1,
      name: 'Dockerizing a Database with docker-compose',
      images: [
        '/assets/images/articles/docker-compose.webp',
      ],
      source: 'https://medium.com/@imertpro/setup-a-database-with-a-docker-compose-file-and-connect-it-to-a-spring-java-app-71db3c2c2711',
    },
    {
      id: 2,
      name: 'Introduction to Apache Spark and its data structures',
      images: [
        '/assets/images/articles/apache-spark.png',
      ],
      source: 'https://medium.com/@imertpro/introduction-to-apache-spark-rdds-and-dataframes-with-python-d72f1eb4a0f8',
    },
    {
      id: 3,
      name: 'Functional Programming Key Concepts with Java',
      images: [
        '/assets/images/articles/functional-programming.png',
      ],
      source: 'https://medium.com/@imertpro/functional-programming-with-java-key-concepts-e0922d7a8f7a',
    },
    {
      id: 4,
      name: 'Understanding Apache Kafka Architecture',
      images: [
        '/assets/images/articles/apache-kafka.png',
      ],
      source: 'https://medium.com/@imertpro/understanding-apache-kafka-architecture-91a8cdcdf978',
    }
  ];


  onMouseEnter() {
    this.sharedService.updateContainerState(true, 'articlesStyle');
  }

  onMouseLeave() {
    this.sharedService.updateContainerState(false, 'articlesStyle');
  }
}

