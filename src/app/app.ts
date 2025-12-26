import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('rebuy-marketplace');

  constructor(private router: Router) {}

  public navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
