import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SectionComponent } from "./section/section.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angapp';
}
