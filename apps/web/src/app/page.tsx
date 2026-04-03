import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
} from '@design-system/shared-ui';

const deals = [
  {
    route: 'Bangkok → Chiang Mai',
    price: '฿1,090',
    meta: 'Depart 12 May 2026 · One-way · Economy',
    image:
      'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80',
  },
  {
    route: 'Bangkok → Phuket',
    price: '฿1,490',
    meta: 'Depart 18 May 2026 · One-way · Economy',
    image:
      'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    route: 'Bangkok → Hat Yai',
    price: '฿1,250',
    meta: 'Depart 20 May 2026 · One-way · Economy',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    route: 'Bangkok → Krabi',
    price: '฿1,390',
    meta: 'Depart 25 May 2026 · One-way · Economy',
    image:
      'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80',
  },
];

const offers = [
  {
    title: 'Weekend Escape Deals',
    description: 'Special fares to top Thai beach destinations this month.',
    image:
      'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Early Bird Summer Promo',
    description: 'Plan ahead and enjoy lower fares with extra baggage offers.',
    image:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Family Holiday Perks',
    description: 'Flexible booking and seat selection benefits for families.',
    image:
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=80',
  },
];

const reasons = [
  {
    title: 'On-Time Performance',
    description:
      'Reliable schedules to keep your plans smooth and stress-free.',
    icon: '⏱️',
  },
  {
    title: 'Comfortable Cabins',
    description: 'Modern seats with thoughtful spacing for domestic journeys.',
    icon: '💺',
  },
  {
    title: 'Easy Digital Check-in',
    description: 'Mobile-first check-in experience built for convenience.',
    icon: '📱',
  },
  {
    title: 'Friendly Service',
    description:
      'Warm Thai hospitality with professional care in every flight.',
    icon: '🤝',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200/70">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(115deg, rgba(15, 23, 42, 0.82), rgba(15, 23, 42, 0.45)), url(https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=2000&q=80) center/cover',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="grid items-end gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl space-y-4 text-white">
              <Badge className="rounded-full bg-white/15 px-3 py-1 text-white backdrop-blur-sm hover:bg-white/15">
                Nok Air · Domestic Travel Made Simple
              </Badge>

              <div className="space-y-3">
                <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Discover your next trip across Thailand
                </h1>
                <p className="max-w-xl text-sm leading-6 text-white/85 sm:text-base">
                  Book with confidence through a cleaner, faster, and more
                  modern experience designed for everyday travel.
                </p>
              </div>
            </div>

            <Card className="border-white/15 bg-white/95 shadow-2xl backdrop-blur">
              <CardHeader className="space-y-1 pb-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <CardTitle className="text-lg font-semibold">
                      Find Flights
                    </CardTitle>
                    <p className="text-sm text-slate-500">
                      Search fares and routes quickly
                    </p>
                  </div>

                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-[#FFD400]"
                    />
                    One-way
                  </label>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">
                  <div className="space-y-1.5 xl:col-span-1">
                    <label className="text-xs font-medium text-slate-600">
                      From
                    </label>
                    <Input
                      placeholder="Bangkok (DMK)"
                      className="h-10 rounded-lg border-slate-200 bg-white"
                    />
                  </div>

                  <div className="space-y-1.5 xl:col-span-1">
                    <label className="text-xs font-medium text-slate-600">
                      To
                    </label>
                    <Input
                      placeholder="Chiang Mai (CNX)"
                      className="h-10 rounded-lg border-slate-200 bg-white"
                    />
                  </div>

                  <div className="space-y-1.5 xl:col-span-1">
                    <label className="text-xs font-medium text-slate-600">
                      Departure
                    </label>
                    <Input
                      type="date"
                      className="h-10 rounded-lg border-slate-200 bg-white"
                    />
                  </div>

                  <div className="space-y-1.5 xl:col-span-1">
                    <label className="text-xs font-medium text-slate-600">
                      Return
                    </label>
                    <Input
                      type="date"
                      className="h-10 rounded-lg border-slate-200 bg-white"
                    />
                  </div>

                  <div className="space-y-1.5 xl:col-span-1">
                    <label className="text-xs font-medium text-slate-600">
                      Passengers
                    </label>
                    <select className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-[#FFD400] focus:ring-2 focus:ring-[#FFD400]/20">
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>2 Adults, 1 Child</option>
                      <option>Family (4)</option>
                    </select>
                  </div>

                  <div className="flex items-end xl:col-span-1">
                    <Button className="h-10 w-full rounded-lg bg-[#FFD400] font-medium text-slate-900 hover:bg-[#f5cb00]">
                      Search
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-slate-500">
              Best Fare Highlights
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Top Flight Deals
            </h2>
          </div>

          <Button
            variant="outline"
            className="rounded-lg border-slate-200 bg-white text-slate-700"
          >
            View all fares
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {deals.map((deal) => (
            <Card
              key={deal.route}
              className="overflow-hidden border-slate-200/80 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className="h-36 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${deal.image})` }}
              />
              <CardContent className="space-y-3 p-4">
                <div className="space-y-1.5">
                  <h3 className="line-clamp-2 text-base font-semibold leading-6">
                    {deal.route}
                  </h3>
                  <p className="text-2xl font-bold tracking-tight text-[#d6a800]">
                    {deal.price}
                  </p>
                  <p className="text-sm leading-5 text-slate-500">
                    {deal.meta}
                  </p>
                </div>

                <Button className="w-full rounded-lg bg-[#FFD400] text-slate-900 hover:bg-[#f5cb00]">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-12 px-4 pb-12 sm:px-6 lg:px-8 lg:space-y-14 lg:pb-16">
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Special Offers
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Curated promotions and seasonal travel inspiration
              </p>
            </div>

            <div className="hidden gap-2 sm:flex">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-slate-200"
              >
                ←
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-slate-200"
              >
                →
              </Button>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {offers.map((offer) => (
              <article
                key={offer.title}
                className="group relative h-56 overflow-hidden rounded-2xl border border-slate-200/70 bg-cover bg-center shadow-sm"
                style={{ backgroundImage: `url(${offer.image})` }}
              >
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-900/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-lg font-semibold">{offer.title}</h3>
                  <p className="mt-1 text-sm leading-5 text-white/85">
                    {offer.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Why Fly Nok Air
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Trusted service and practical comfort for domestic travel
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason) => (
              <Card
                key={reason.title}
                className="border-slate-200/80 text-center shadow-sm"
              >
                <CardContent className="p-5">
                  <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-[#fff7cc] text-xl">
                    {reason.icon}
                  </div>
                  <h3 className="text-base font-semibold">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="relative overflow-hidden border-0 bg-transparent shadow-none">
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background:
                'linear-gradient(135deg, rgba(15, 23, 42, 0.94), rgba(30, 41, 59, 0.74)), url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80) center/cover',
            }}
          />
          <CardContent className="relative rounded-3xl px-6 py-10 text-white sm:px-8 lg:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFD400]">
                  Nok Fan Club
                </p>
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  Fly more, enjoy more privileges
                </h2>
                <p className="text-sm leading-6 text-white/85 sm:text-base">
                  Get exclusive fares, priority campaign access, and member-only
                  benefits every time you fly with Nok Air.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button className="rounded-lg bg-[#FFD400] text-slate-900 hover:bg-[#f5cb00]">
                  Join Nok Fan Club
                </Button>
                <Button
                  variant="outline"
                  className="rounded-lg border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
