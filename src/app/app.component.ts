import { Component, effect, inject } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private readonly _countriesService = inject(CountriesService);

  readonly countries$ = this._countriesService.countrys$;

  constructor() {
    effect(() => {
      console.log('Países atualizados:', this.countries$());
    });
  }
}
