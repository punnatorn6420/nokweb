import { FlightSearchForm } from './_components/FlightSearchForm';
import styles from './page.module.css';
import {
  POPULAR_ROUTES,
  getTodayLowestFares,
  mergePopularRoutesWithPrices,
} from '../lib/today-lowest-fares';

export const revalidate = 120; // 20 seconds

function formatTHB(amount: number) {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    maximumFractionDigits: 0,
  }).format(amount);
}

export default async function HomePage() {
  const now = new Date();
  const todayLabel = new Intl.DateTimeFormat('th-TH', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(now);

  let deals = mergePopularRoutesWithPrices({ popular: POPULAR_ROUTES, fares: [] });
  try {
    const data = await getTodayLowestFares({
      routes: [
        { from: 'DMK', to: 'CNX' },
        { from: 'DMK', to: 'USM' },
        { from: 'DMK', to: 'HKT' },
        { from: 'DMK', to: 'HDY' },
      ],
      revalidateSeconds: revalidate,
    });
    deals = mergePopularRoutesWithPrices({ popular: POPULAR_ROUTES, fares: data.fares });
  } catch {
    // If backend is down, keep page rendering and show placeholders.
  }

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <header className={styles.header}>
            <h1 className={styles.headerTitle}>จองเที่ยวบินของคุณ</h1>
            <p className={styles.headerSubtitle}>
              ค้นหาเส้นทาง วันเดินทาง และจำนวนผู้โดยสาร (Adult/Child/Infant)
            </p>
          </header>

          <FlightSearchForm />

          <section className={`${styles.card} rounded shadow`}>
            <h2 className={styles.cardTitle}>ราคาต่ำสุดของวันนี้ (เส้นทางยอดนิยม)</h2>
            <div className={styles.hint}>อัปเดตล่าสุด: {todayLabel}</div>

            <div className={styles.dealsList}>
              {deals.map((r) => (
                <div key={r.key} className={styles.dealItem}>
                  <div className={styles.dealRoute}>
                    <div className={styles.dealRouteTitle}>{r.title}</div>
                    <div className={styles.dealRouteSub}>{r.subtitle}</div>
                  </div>
                  <div className={styles.price}>
                    {r.priceTHB === null ? '—' : formatTHB(r.priceTHB)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
