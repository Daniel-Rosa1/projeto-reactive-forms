import { CountrieList } from "../../types/countrie-list";
import { IBaseCountrieResponse } from "../base-countrie-response.interface";

export interface ICountrieResponse extends IBaseCountrieResponse {
  data: CountrieList;
}

