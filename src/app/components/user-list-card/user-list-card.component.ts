import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-list-card',
  standalone: false,
  templateUrl: './user-list-card.component.html',
  styleUrl: './user-list-card.component.scss'
})
export class UserListCardComponent {

  name = input<string>("")
  email = input<string>("")

}
