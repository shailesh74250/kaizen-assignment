export interface UserState {
  users: UserType[];
  user: UserType | null;
  loading: boolean;
  error: string | null;
}

export interface UserType {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: HairType
  ip: string
  address: AddressType
  macAddress: string
  university: string
  bank: BankType
  company: CompanyType
  ein: string
  ssn: string
  userAgent: string
  crypto: CryptoType
  role: string
}
  
export interface HairType {
  color: string
  type: string
}
  
export interface AddressType {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  coordinates: CoordinatesType
  country: string
}
  
export interface CoordinatesType {
  lat: number
  lng: number
}
  
export interface BankType {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

export interface CompanyType {
  department: string
  name: string
  title: string
  address: AddressType
}

export interface CryptoType {
  coin: string
  wallet: string
  network: string
}
  