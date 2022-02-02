import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title : string = "List of authors";

  imageURL ='../assets/phone.png';
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
