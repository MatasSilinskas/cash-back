import {IUser} from '../shared-services/user.interface';

export interface IEvent {
  id: number;
  payer: IUser;
  payee: IUser;
  date: string;
  debtAmount: string;
  comment?: string;
}
