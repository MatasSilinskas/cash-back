import {IHuman} from '../shared-services/user.interface';

export interface IFriend extends IHuman {
  id: number;
  userId: number;
}
