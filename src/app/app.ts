import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { MainSection } from "./components/sections/main-section/main-section";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, MainSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = 'Wilder Mayta';
}
