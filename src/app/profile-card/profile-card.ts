import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = 'I chose web development because of the power to turn an abstract idea into a fully functional product from scratch. Being able to build both the sleek frontend interface and the secure backend architecture gives me full control over the user experience.';
}
