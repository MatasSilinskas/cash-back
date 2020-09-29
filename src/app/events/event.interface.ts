export interface EventInterface {
  id: number;
  payer: UserInterface;
  payee: UserInterface;
  date: string;
  debtAmount: string;
}

export interface UserInterface {
  id: number;
  firstName: string;
  lastName: string;
}
