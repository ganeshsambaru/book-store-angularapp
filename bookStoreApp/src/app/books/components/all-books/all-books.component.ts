import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],
  providers: [BookService]
})
export class AllBooksComponent implements OnInit {

  public books: BookModel[] =[];

  constructor(public bookService: BookService) {

  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    console.log(this.books)

  }
}
