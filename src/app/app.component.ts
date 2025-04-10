import { Component, effect, inject } from '@angular/core';
import { CountriesService } from './services/contries/countries.service';
import { StatesService } from './services/states/states.service';
import { CitiesService } from './services/cities/cities.service';
import { Observable } from 'rxjs';
import { ICountry } from './interfaces/countrie-response/country.interface';
import { UsersService } from './services/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private readonly _countriesService = inject(CountriesService);
  private readonly _statesService = inject(StatesService);
  private readonly _citiesService = inject(CitiesService);
  private readonly _usersService = inject(UsersService);

  readonly countries$ = this._countriesService.countrys$;
  readonly states$ = this._statesService.states$;
  readonly cities$ = this._citiesService.cities$;

  constructor() {
    this._usersService.getUsers().subscribe((users) => {
      console.log("Usuários atualizados:", users);
    });

    this._statesService.getStates('Brazil');
    this._citiesService.getCities('Brazil', 'São Paulo');

  }
}
