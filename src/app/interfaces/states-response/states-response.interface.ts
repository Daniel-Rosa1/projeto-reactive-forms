import { IBaseCountrieResponse } from "../base-countrie-response.interface";
import { IStateResponseData } from "./state-response-data.interface";

export interface IStatesResponse extends IBaseCountrieResponse {
  data: IStateResponseData;
}



