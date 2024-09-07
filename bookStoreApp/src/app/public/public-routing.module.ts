import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
const routes: Routes = [
  {
    path: 'public',
    component: PublicComponent,
    children: [
      {
        path: 'all-books',
        component: AllBooksComponent,
      },
      {
        path: 'book-details/:id/auther/:autherId',
        component: BookDetailsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
