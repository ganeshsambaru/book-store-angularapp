import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public name: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParam) => {
      console.log(queryParam);
      this.name = queryParam['name'];
    });
  }

  goToSignup(): void{
    this.router.navigate(['/auth/signup']);
  }
  goToBookDetails(id:number,autherId:number):void{
    this.router.navigate(['/public/book-details',id,'auther',autherId],{queryParams:{name:'ganesh'}});
  }
}
