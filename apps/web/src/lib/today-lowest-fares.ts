import type {
  AirportCode,
  GetTodayLowestFaresResponse,
  RouteKey,
  TodayLowestFare,
} from 'shared-dtos';

export type PopularRoute = {
  key: string;
  title: string;
  subtitle: string;
  route: RouteKey;
};

export const POPULAR_ROUTES: PopularRoute[] = [
  {
    key: 'dmk-cnx',
    title: 'ดอนเมือง → เชียงใหม่',
    subtitle: 'DMK / CNX',
    route: 'DMK-CNX',
  },
  {
    key: 'dmk-usm',
    title: 'ดอนเมือง → สมุย',
    subtitle: 'DMK / USM',
    route: 'DMK-USM',
  },
  {
    key: 'dmk-hkt',
    title: 'ดอนเมือง → ภูเก็ต',
    subtitle: 'DMK / HKT',
    route: 'DMK-HKT',
  },
  {
    key: 'dmk-hdy',
    title: 'ดอนเมือง → หาดใหญ่',
    subtitle: 'DMK / HDY',
    route: 'DMK-HDY',
  },
];

export type PopularRouteWithPrice = PopularRoute & {
  priceTHB: number | null;
  currency: 'THB';
};

function getApiBaseUrl() {
  return process.env.API_BASE_URL ?? 'http://localhost:3333/api';
}

export async function getTodayLowestFares(options: {
  routes: Array<{ from: AirportCode; to: AirportCode }>;
  revalidateSeconds: number;
}): Promise<GetTodayLowestFaresResponse> {
  const url = new URL('/api/lowest-fares/today', getApiBaseUrl());
  // Routes param reserved for future filtering.
  url.searchParams.set(
    'routes',
    options.routes.map((r) => `${r.from}-${r.to}`).join(','),
  );

  const res = await fetch(url.toString(), {
    // Next.js ISR (App Router)
    next: { revalidate: options.revalidateSeconds },
  });
  
  if (!res.ok) {
    throw new Error(`Failed to fetch lowest fares: ${res.status}`);
  }

  return (await res.json()) as GetTodayLowestFaresResponse;
}

export function mergePopularRoutesWithPrices(params: {
  popular: PopularRoute[];
  fares: TodayLowestFare[];
}): PopularRouteWithPrice[] {
  const byRoute = new Map<RouteKey, TodayLowestFare>();
  for (const fare of params.fares) byRoute.set(fare.route, fare);

  return params.popular.map((r) => {
    const fare = byRoute.get(r.route);
    return {
      ...r,
      priceTHB: fare?.priceTHB ?? null,
      currency: 'THB',
    };
  });
}
