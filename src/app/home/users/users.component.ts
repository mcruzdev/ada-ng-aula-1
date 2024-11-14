import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  
  
  users = [
    {
      id: 1,
      name: 'Marilia',
      age: 20
    },
    {
      id: 2,
      name: 'Lucas',
      age: 20
    },
    {
      id: 3,
      name: 'Leonardo',
      age: 20
    },
  ];
}
