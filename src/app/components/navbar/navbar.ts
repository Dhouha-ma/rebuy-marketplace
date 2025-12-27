import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Navbar {
  public menuOpen = false;
  public currentPage = 'offers';

  constructor(private router: Router) {}

  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  public navigateTo(page: string) {
    this.currentPage = page;
    this.router.navigate([page]);
  }
}
