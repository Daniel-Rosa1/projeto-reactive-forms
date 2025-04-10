import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map } from 'rxjs';
import { ICitiesResponse} from '../../interfaces/cities-response/cities-response.interface';
import { CitiesList } from '../../types/cities-list';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _apiUrl = 'https://countriesnow.space/api/v0.1/countries/state/cities';

  readonly _cities = signal<CitiesList >([]);
  readonly cities$ = this._cities.asReadonly();

  getCities(countryName: string, stateName: string) {
    return this._httpClient.post<ICitiesResponse>(this._apiUrl, {
      country: countryName,
      state: stateName
    })
    .pipe(
      map((citiesResponse) => {
        return citiesResponse.data;
      })
    ).subscribe((citiesResponse) => {
      this._cities.set(citiesResponse);
    });
  }
}
