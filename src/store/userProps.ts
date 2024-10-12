export interface UserState {
  users: UserProps[];
  user: UserProps | null;
  loading: boolean;
  error: string | null;
}
export interface UserProps {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: HairProps;
  ip: string;
  address: AddressProps;
  macAddress: string;
  university: string;
  bank: BankProps;
  company: CompanyProps;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: CryptoProps;
  role: string;
}
export interface HairProps {
  color: string;
  type: string;
}
export interface AddressProps {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: CoordinatesProps;
  country: string;
}
export interface CoordinatesProps {
  lat: number;
  lng: number;
}  
export interface BankProps {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}
export interface CompanyProps {
  department: string;
  name: string;
  title: string;
  address: AddressProps;
}
export interface CryptoProps {
  coin: string;
  wallet: string;
  network: string;
}
  