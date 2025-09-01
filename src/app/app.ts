import { Component, signal } from '@angular/core';

@Component({
  selector: 'tl-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tagged-literal');
}
