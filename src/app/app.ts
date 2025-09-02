import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'tl-root',
  imports: [UpperCasePipe, LowerCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly user = 'ivan';
  readonly group = 'guest';
  readonly alt = 'image';

  greeting(strings: TemplateStringsArray, user: string, group: string): string {
    console.log('strings ::', strings);

    return `${user}@${group}:/${group}/${user}$`;
  }

  rest(_: TemplateStringsArray, ...placeholders: string[]): void {
    console.log('placeholders ::', placeholders);
  }

  name(): string {
    return `${this.user}`;
  }

  getGroup(): string {
    return this.group;
  }

  hi(strings: TemplateStringsArray, name: string): string {
    return `${strings[0]} ${name.toUpperCase()}${strings[1]}`;
  }

  description(): string {
    return this.alt;
  }

  altText(strings: TemplateStringsArray, alt: string): string {
    return `${strings[0].trim()} ${alt}`;
  }

  firstName(_: TemplateStringsArray): string {
    return `Aaron`;
  }

  secondName(_: TemplateStringsArray): string {
    return `Greenberg`;
  }
}
