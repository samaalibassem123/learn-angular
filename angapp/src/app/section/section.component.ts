import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-section',
  imports: [ButtonComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  n = signal<number>(0);

  mines(){
    if(this.n() > 0)
    this.n.update((n)=>--n)
  }
  plus(){
    this.n.update((n)=>++n)
  }
}
