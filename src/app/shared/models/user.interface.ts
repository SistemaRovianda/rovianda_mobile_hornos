export interface UserInterface {
  uid?: string;
  token?: string;
  currentToken?: string;
  name?: string;
  firstSurname?: string;
  lastSurname?: string;
  email?: string;
  rol?: string;
}

export interface SignIn {
  email: string;
  password: string;
}

export interface user {
  nameElaborated: string;
  jobElaborated: string;
  nameVerify: string;
  jobVerify: string;
}
