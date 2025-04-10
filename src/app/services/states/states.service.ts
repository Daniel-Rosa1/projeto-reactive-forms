import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICountrieResponse } from '../../interfaces/countrie-response/countrie-response.interface';
import { IStatesResponse } from '../../interfaces/states-response/states-response.interface';
import { IStateResponseData } from '../../interfaces/states-response/state-response-data.interface';
import { StateList } from '../../types/state-list';


@Injectable({
  providedIn: 'root'
})
export class StatesService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _apiUrl = 'https://countriesnow.space/api/v0.1/countries/states';

  readonly _states = signal<StateList>([]);
  readonly states$ = this._states.asReadonly();

  constructor() { }

  getStates(countryName: string) {
    return this._httpClient.post<IStatesResponse>(this._apiUrl, {
      country: countryName
    })
    .pipe(
      map((statesResponse) => {
        return statesResponse.data.states;
      })
    ).subscribe((data) => {
      this._states.set(data);
    });
  }
}
