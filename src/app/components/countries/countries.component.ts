import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesService } from '../../services/contries/countries.service';
import { CountrieList } from '../../types/countrie-list';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="countries() as countriesList">
      <ul>
        <li *ngFor="let country of countriesList">
          {{ country.name }} - {{ country.iso2 }}
        </li>
      </ul>
    </div>
  `
})
export class CountriesComponent {
  private readonly _countriesService = inject(CountriesService);
  readonly countries = this._countriesService.countries;
}
