import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title = "List of authors";
  imageURL = "https://www.thespruce.com/plants-with-big-flowers-4138211";
  course: any;
  authors: any;

  constructor(private service: AuthorsService) {
    this.authors = service.getAuthors();

   }

  ngOnInit(): void {
  }

  getTitle(){
    return this.title;
  }

}
