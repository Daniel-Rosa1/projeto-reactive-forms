import { IBaseCountrieResponse } from "../base-countrie-response.interface";
import { CitiesList } from "../../types/cities-list";
export interface ICitiesResponse extends IBaseCountrieResponse {
  data: CitiesList;
}
