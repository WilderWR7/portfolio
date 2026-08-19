import { Component, input } from '@angular/core';

@Component({
  selector: 'hero-section',
  imports: [],
  templateUrl: './hero-section.html',
})
export class HeroSection {
  name = input.required<string>();
}
