import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'route';

  // router = inject(Router)
  constructor(private readonly router: Router) {}


  goToHome() {

   this.router.navigate(['home']) 
  }

  goToLogin() {
    this.router.navigate(['login'])
  }

}
