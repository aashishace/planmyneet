export interface University {
  id: string;
  name: string;
  city: string;
  tuitionFeeUSD?: number;
  hostelFeeUSD?: number;
  tuitionFeeINR?: number;
  hostelFeeINR?: number;
  totalFeeINR: string;
  image: string;
}

export interface CountryFacts {
  capital: string;
  population: string;
  currency: string;
  indianStudents: string;
}

export interface Country {
  name: string;
  slogan: string;
  image: string;
  universities: University[];
  highlights: string[];
  facts: CountryFacts;
}