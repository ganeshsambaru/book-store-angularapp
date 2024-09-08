import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable()
export class BookService {

  constructor() { }

  public getBooks(): BookModel[] {
    return [
      {
        "id": 1,
        "title": "Angular fundamentals",
        "totalPages": 453,
        "author": "Ram Singh",
        "price": {
          "currency": "INR",
          "value": 199
        }
      },
      {
        "id": 2,
        "title": "Java fundamentals",
        "totalPages": 987,
        "author": "krish pal",
        "price": {
          "currency": "USD",
          "value": 19
        }
      },
      {
        "id": 3,
        "title": "C# fundamentals",
        "totalPages": 600,
        "author": "Gan sam",
        "price": {
          "currency": "INR",
          "value": 19
        }
      },

    ]

  }
}
