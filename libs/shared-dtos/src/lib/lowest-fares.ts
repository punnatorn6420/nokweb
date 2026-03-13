export type AirportCode = 'DMK' | 'CNX' | 'USM' | 'HKT' | 'HDY';

export type RouteKey = `${AirportCode}-${AirportCode}`;

export interface TodayLowestFare {
  route: RouteKey;
  priceTHB: number;
  currency: 'THB';
}

export interface GetTodayLowestFaresResponse {
  dateISO: string;
  fares: TodayLowestFare[];
}
