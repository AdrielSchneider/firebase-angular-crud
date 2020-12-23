import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private router: Router) {
  }

  navigateCrudItens() {
    this.router.navigate(['pages/tabelacrud']);
  }

  navigateInsere() {
    this.router.navigate(['pages/insereproduto']);    
  }

  navigateCrudPessoa() {
    this.router.navigate(['pages/pessoa']);
  }

}
