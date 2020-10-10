import {IUser} from '../shared-services/user.interface';

export interface IEvent extends IBaseEvent {
  id: number;
}

export interface IBaseEvent {
  payer: IUser;
  payee: IUser;
  date: string;
  debtAmount: string;
  comment?: string;
}
