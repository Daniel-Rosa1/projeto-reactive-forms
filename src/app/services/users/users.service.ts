import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaritalStatusEnum } from '../../enums/marital-status.enum';
import { PhoneTypeEnum } from '../../enums/phone-type.enum';
import { AddressTypeEnum } from '../../enums/addres-type.enum';
import { UsersListResponse } from '../../types/users-list-response';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly usersList: UsersListResponse = [
    {
        name: 'Fulano',
        email: 'fulano@hotmail.com',
        country: 'Brazil',
        state: 'São Paulo',
        maritalStatus: MaritalStatusEnum.SINGLE,
        monthlyIncome: 5000, // -> Renda Mensal
        birthDate: '25/02/1991',
        phoneList: [
            {
                type: PhoneTypeEnum.RESIDENTIAL,
                areaCode: '11', // -> DDD
                internationalCode: '+55', // -> DDI
                number: '1234-5678', // -> Número
            },
            {
                type: PhoneTypeEnum.MOBILE,
                areaCode: '11', // -> DDD
                internationalCode: '+55', // -> DDI
                number: '91111-2222', // -> Número
            },
            {
                type: PhoneTypeEnum.EMERGENCY,
                areaCode: '11', // -> DDD
                internationalCode: '+55', // -> DDI
                number: '93333-4444', // -> Número
            },
        ],
        addressList: [
            {
                type: AddressTypeEnum.RESIDENTIAL,
                street: 'Rua de Tal',
                complement: 'Próximo ao parque',
                country: 'Brazil',
                state: 'São Paulo',
                city: 'Ribeirão Preto',
            },
            {
                type: AddressTypeEnum.WORK,
                street: 'Avenida de Tal',
                complement: 'Próximo ao centro comercial',
                country: 'Brazil',
                state: 'São Paulo',
                city: 'Santos',
            },
            {
                type: AddressTypeEnum.ALTERNATIVE,
                street: 'Estrada de Tal',
                complement: 'Próximo ao shopping',
                country: 'Brazil',
                state: 'São Paulo',
                city: 'São Carlos',
            },
        ],
        dependentsList: [
            {
                name: 'Fulaninho',
                age: 12,
                document: 22011944867,
            },
            {
                name: 'Fulaninha',
                age: 9,
                document: 99988877766,
            },
        ],
    },
    {
        name: 'Laura',
        email: 'laura@hotmail.com',
        country: 'Brazil',
        state: 'São Paulo',
        maritalStatus: MaritalStatusEnum.MARRIED,
        monthlyIncome: 6000, // -> Renda Mensal
        birthDate: '12/12/1994',
        phoneList: [
            {
                type: PhoneTypeEnum.EMERGENCY,
                areaCode: '11', // -> DDD
                internationalCode: '+55', // -> DDI
                number: '93333-7777', // -> Número
            },
        ],
        addressList: [
            {
                type: AddressTypeEnum.WORK,
                street: 'Avenida de Tal',
                complement: 'Próximo ao centro comercial',
                country: 'Brazil',
                state: 'São Paulo',
                city: 'Santos',
            },
        ],
        dependentsList: [
            {
                name: 'Fulaninho',
                age: 5,
                document: 22011944800,
            }
        ],
    },
    {
        name: 'Marcos',
        email: 'marcos@hotmail.com',
        country: 'Brazil',
        state: 'São Paulo',
        maritalStatus: MaritalStatusEnum.DIVORCED,
        monthlyIncome: 7000, // -> Renda Mensal
        birthDate: '11/11/1991',
        phoneList: [
            {
                type: PhoneTypeEnum.MOBILE,
                areaCode: '11', // -> DDD
                internationalCode: '+55', // -> DDI
                number: '91111-7777', // -> Número
            },
        ],
        addressList: [
            {
                type: AddressTypeEnum.ALTERNATIVE,
                street: 'Estrada de Tal',
                complement: 'Próximo ao shopping',
                country: 'Brazil',
                state: 'São Paulo',
                city: 'São Carlos',
            },
        ],
        dependentsList: [],
    }
];

  getUsers(): Observable<UsersListResponse> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.usersList);
      }, 1000);
    });
  }
}
