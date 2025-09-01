import { Component } from '@angular/core';

@Component({
  selector: 'tl-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly user = 'ivan';
  readonly group = 'guest';

  greeting(strings: TemplateStringsArray, user: string, group: string): string {
    console.log(strings);

    return `${user}@${group}:/${group}/${user}$`;
  }
}
