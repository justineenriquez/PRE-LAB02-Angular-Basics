import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Justine Paul A. Enriquez';
  location = 'Porac, Pampanga';
  email = 'enriquezjustinepaul@gmail.com';
  phone = '0947 989 8346';

  githubName = 'justineenriquez';
  githubUrl = 'https://github.com/justineenriquez'

  profileImage = '/profile.jpeg';

  profile = 'I am a third-year web development student with a hands-on approach to building full-stack applications. I enjoy creating responsive single-page applications using Angular and Vue, backed by robust Node.js and Express APIs connected to MongoDB databases. Additionally, I incorporate cybersecurity best practices to ensure application security, user data protection, and seamless user experiences. I am constantly eager to learn emerging frameworks and refine my full-stack development skills on real-world projects.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Python',
    'Java',
    'PHP',
    'Angular',
    'Figma',
    'Git | Github',
    'Vercel & Render'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
