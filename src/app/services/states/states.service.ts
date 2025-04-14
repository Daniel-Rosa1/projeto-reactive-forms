import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map } from 'rxjs';
import { IStatesResponse } from '../../interfaces/states-response/states-response.interface';
import { StateList } from '../../types/state-list';


@Injectable({
  providedIn: 'root'
})
export class StatesService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _apiUrl = 'https://countriesnow.space/api/v0.1/countries/states';

  readonly _states = signal<StateList>([]);
  readonly _statesLoading = signal<boolean>(false);

  readonly states$ = this._states.asReadonly();
  readonly statesLoading$ = this._statesLoading.asReadonly();

  constructor() { }

  getStates(countryName: string) {
    this._statesLoading.set(true);

    return this._httpClient.post<IStatesResponse>(this._apiUrl, {
      country: countryName
    })
    .pipe(
      map((statesResponse) => {
        return statesResponse.data.states;
      })
    ).subscribe({
      next: (data) => {
        this._states.set(data);
        this._statesLoading.set(false);
      },
      error: (error) => {
        console.error('Erro ao carregar estados:', error);
        this._statesLoading.set(false);
      }
    });
  }
}
