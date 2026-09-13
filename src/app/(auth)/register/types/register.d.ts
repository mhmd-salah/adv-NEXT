export interface RegisterFormValues {
  username: string;
  password: string;
  age: number;
  birthday: string;
  country: 'egypt' | 'usa' | 'france' | 'germany';
  city: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: 'egypt' | 'usa' | 'france' | 'germany';
  };
}