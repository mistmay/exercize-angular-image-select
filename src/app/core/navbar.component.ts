import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <header>
      <mat-toolbar color="primary" class="h-100">
        <span>Images Gallery</span>
      </mat-toolbar>
    </header>
  `,
  styles: [`
  header {
    height: 70px;
  }
  `]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
