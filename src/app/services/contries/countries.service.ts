import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { finalize, map } from 'rxjs';
import { ICountrieResponse } from '../../interfaces/countrie-response/countrie-response.interface';
import { ICountry } from '../../interfaces/countrie-response/country.interface';
import { CountrieList } from '../../types/countrie-list';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _apiUrl = 'https://countriesnow.space/api/v0.1/countries/positions';

  private readonly _countrys = signal<CountrieList>([]);
  private readonly _countrysLoading = signal<boolean>(false);

  readonly countrys$ = this._countrys.asReadonly();
  readonly countrysLoading$ = this._countrysLoading.asReadonly();

  constructor() {
    this.getContrys();
  }

  private getContrys() {
    this._countrysLoading.set(true);
    this._httpClient.get<ICountrieResponse>(this._apiUrl)
      .pipe(
        map(response => response.data),
        finalize(() => this._countrysLoading.set(false))
      )
      .subscribe({
        next: (countrys) => this._countrys.set(countrys),
        error: (error) => console.error('Erro ao carregar países:', error)
      });
  }
}
