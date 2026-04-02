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
    description: 'Reliable schedules to keep your plans smooth and stress-free.',
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
    description: 'Warm Thai hospitality with professional care in every flight.',
    icon: '🤝',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f7f9] text-[#25292e]">
      <section className="relative overflow-hidden px-4 pb-20 pt-6 sm:px-8 lg:px-14 lg:pb-24 lg:pt-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(115deg, rgba(10, 27, 45, 0.84), rgba(10, 27, 45, 0.52)), url(https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=2000&q=80) center/cover',
          }}
        />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start gap-10 pt-10 text-white lg:pt-16">
          <div className="max-w-2xl space-y-4">
            <p className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-medium tracking-wide backdrop-blur">
              Nok Air · Smart Travel Across Thailand
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Book your next journey with confidence.
            </h1>
            <p className="max-w-xl text-base text-white/90 sm:text-lg">
              Discover seamless domestic travel with clean fares, flexible options,
              and a smooth booking experience designed to get you flying faster.
            </p>
          </div>

          <div className="w-full max-w-5xl rounded-[20px] bg-white p-5 text-[#25292e] shadow-2xl shadow-black/25 sm:p-6 lg:p-7">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-semibold">Find Flights</h2>
              <label className="flex items-center gap-2 text-sm text-[#5b6168]">
                <input type="checkbox" className="h-4 w-4 accent-[#FFD400]" />
                One-way only
              </label>
            </div>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
              <label className="lg:col-span-1">
                <span className="mb-1 block text-sm text-[#5b6168]">From</span>
                <input
                  type="text"
                  placeholder="Bangkok (DMK)"
                  className="h-12 w-full rounded-xl border border-transparent bg-[#f2f4f7] px-4 text-sm outline-none transition focus:border-[#FFD400] focus:bg-white"
                />
              </label>
              <label className="lg:col-span-1">
                <span className="mb-1 block text-sm text-[#5b6168]">To</span>
                <input
                  type="text"
                  placeholder="Chiang Mai (CNX)"
                  className="h-12 w-full rounded-xl border border-transparent bg-[#f2f4f7] px-4 text-sm outline-none transition focus:border-[#FFD400] focus:bg-white"
                />
              </label>
              <label className="lg:col-span-1">
                <span className="mb-1 block text-sm text-[#5b6168]">Departure</span>
                <input
                  type="date"
                  className="h-12 w-full rounded-xl border border-transparent bg-[#f2f4f7] px-4 text-sm outline-none transition focus:border-[#FFD400] focus:bg-white"
                />
              </label>
              <label className="lg:col-span-1">
                <span className="mb-1 block text-sm text-[#5b6168]">Return</span>
                <input
                  type="date"
                  className="h-12 w-full rounded-xl border border-transparent bg-[#f2f4f7] px-4 text-sm outline-none transition focus:border-[#FFD400] focus:bg-white"
                />
              </label>
              <label className="lg:col-span-1">
                <span className="mb-1 block text-sm text-[#5b6168]">Passengers</span>
                <select className="h-12 w-full rounded-xl border border-transparent bg-[#f2f4f7] px-4 text-sm outline-none transition focus:border-[#FFD400] focus:bg-white">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>2 Adults, 1 Child</option>
                  <option>Family (4)</option>
                </select>
              </label>
              <div className="flex items-end lg:col-span-1">
                <button className="h-12 w-full rounded-xl bg-[#FFD400] px-4 text-sm font-semibold text-[#25292e] transition hover:bg-[#f5cb00]">
                  Search Flights
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-8 lg:px-14 lg:pb-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-[#6c737b]">Best Fare Highlights</p>
            <h2 className="text-2xl font-semibold sm:text-3xl">Top Flight Deals</h2>
          </div>
          <button className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-[#25292e] shadow-sm">
            View all fares
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {deals.map((deal) => (
            <article
              key={deal.route}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="h-44 w-full bg-cover bg-center" style={{ backgroundImage: `url(${deal.image})` }} />
              <div className="space-y-3 p-4">
                <h3 className="text-base font-semibold">{deal.route}</h3>
                <p className="text-3xl font-bold text-[#e1b800]">{deal.price}</p>
                <p className="text-sm text-[#6c737b]">{deal.meta}</p>
                <button className="w-full rounded-xl bg-[#FFD400] py-2.5 text-sm font-semibold text-[#25292e] transition hover:bg-[#f5cb00]">
                  Book Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl space-y-14 px-4 pb-16 sm:px-8 lg:px-14 lg:pb-20">
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-semibold sm:text-3xl">Special Offers</h2>
            <div className="flex gap-2">
              <button className="grid h-10 w-10 place-items-center rounded-full bg-white text-lg shadow-sm">←</button>
              <button className="grid h-10 w-10 place-items-center rounded-full bg-white text-lg shadow-sm">→</button>
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {offers.map((offer) => (
              <article
                key={offer.title}
                className="relative h-64 overflow-hidden rounded-[20px] bg-cover bg-center shadow-sm"
                style={{ backgroundImage: `url(${offer.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="text-xl font-semibold">{offer.title}</h3>
                  <p className="mt-1 text-sm text-white/90">{offer.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Why Fly Nok Air</h2>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5"
              >
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-[#fff6cc] text-2xl">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm text-[#6c737b]">{reason.description}</p>
              </article>
            ))}
          </div>
        </div>

        <section className="relative overflow-hidden rounded-[24px] px-6 py-12 text-white sm:px-10 lg:px-14">
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(15, 24, 35, 0.92), rgba(31, 41, 55, 0.75)), url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80) center/cover',
            }}
          />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-2">
              <p className="text-sm font-medium uppercase tracking-widest text-[#FFD400]">Nok Fan Club</p>
              <h2 className="text-3xl font-semibold">Fly more, enjoy more privileges.</h2>
              <p className="text-white/90">
                Get exclusive fares, priority campaign access, and member-only travel
                benefits every time you fly with Nok Air.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl bg-[#FFD400] px-6 py-3 text-sm font-semibold text-[#25292e] transition hover:bg-[#f5cb00]">
                Join Nok Fan Club
              </button>
              <button className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/20">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
