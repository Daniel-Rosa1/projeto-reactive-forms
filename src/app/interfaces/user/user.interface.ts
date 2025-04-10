import { TAddressList } from "../../types/address-list";
import { TDependentList } from "../../types/dependent-list";
import { TPhoneList } from "../../types/phone-list";

export interface IUser {
  name: string;
  email: string;
  country: string;
  state: string;
  maritalStatus: number;
  monthlyIncome: number;
  birthDate: string;
  phoneList: TPhoneList;
  addressList: TAddressList;
  dependentsList: TDependentList;
}
