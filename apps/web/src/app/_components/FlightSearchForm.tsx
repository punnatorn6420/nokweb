'use client';

import { useMemo, useState, type FormEvent } from 'react';
import styles from '../page.module.css';

type TripType = 'one-way' | 'round-trip' | 'multi-city';

type AirportCode = 'DMK' | 'CNX' | 'USM' | 'HKT' | 'HDY';

type Segment = {
  from: AirportCode;
  to: AirportCode;
  date: string;
};

const airportOptions: Array<{ code: AirportCode; label: string }> = [
  { code: 'DMK', label: 'ดอนเมือง (DMK)' },
  { code: 'CNX', label: 'เชียงใหม่ (CNX)' },
  { code: 'USM', label: 'สมุย (USM)' },
  { code: 'HKT', label: 'ภูเก็ต (HKT)' },
  { code: 'HDY', label: 'หาดใหญ่ (HDY)' },
];

export function FlightSearchForm() {
  const [tripType, setTripType] = useState<TripType>('one-way');
  const [oneWay, setOneWay] = useState<Segment>({ from: 'DMK', to: 'CNX', date: '' });
  const [returnDate, setReturnDate] = useState<string>('');
  const [multiCity, setMultiCity] = useState<[Segment, Segment]>([
    { from: 'DMK', to: 'CNX', date: '' },
    { from: 'CNX', to: 'DMK', date: '' },
  ]);
  const [adult, setAdult] = useState<number>(1);
  const [child, setChild] = useState<number>(0);
  const [infant, setInfant] = useState<number>(0);

  const canSearch = useMemo(() => {
    if (tripType === 'multi-city') {
      return multiCity.every((s) => s.date && s.from !== s.to);
    }

    if (!oneWay.date || oneWay.from === oneWay.to) return false;
    if (tripType === 'round-trip' && !returnDate) return false;
    return true;
  }, [multiCity, oneWay.date, oneWay.from, oneWay.to, returnDate, tripType]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const payload = {
      tripType,
      passengers: { adult, child, infant },
      itinerary:
        tripType === 'multi-city'
          ? multiCity
          : [
              { ...oneWay },
              ...(tripType === 'round-trip'
                ? [{ from: oneWay.to, to: oneWay.from, date: returnDate }]
                : []),
            ],
    };

    // Placeholder: wire this to real search API later.
    // eslint-disable-next-line no-console
    console.log('Search payload', payload);
    alert('พร้อมเริ่ม implement ค้นหาเที่ยวบินแล้ว (ดู payload ใน console)');
  }

  return (
    <section className={`${styles.card} rounded shadow`}>
      <h2 className={styles.cardTitle}>ค้นหาเที่ยวบิน</h2>

      <div className={styles.tripTypes}>
        <label className={styles.tripType}>
          <input
            type="radio"
            name="tripType"
            value="one-way"
            checked={tripType === 'one-way'}
            onChange={() => setTripType('one-way')}
          />
          One-way
        </label>
        <label className={styles.tripType}>
          <input
            type="radio"
            name="tripType"
            value="round-trip"
            checked={tripType === 'round-trip'}
            onChange={() => setTripType('round-trip')}
          />
          Round-trip
        </label>
        <label className={styles.tripType}>
          <input
            type="radio"
            name="tripType"
            value="multi-city"
            checked={tripType === 'multi-city'}
            onChange={() => setTripType('multi-city')}
          />
          Multi-city
        </label>
      </div>

      <form className={styles.formGrid} onSubmit={onSubmit}>
        {tripType !== 'multi-city' ? (
          <>
            <div className={styles.row}>
              <div className={styles.field}>
                <span className={styles.label}>ต้นทาง</span>
                <select
                  className={styles.input}
                  value={oneWay.from}
                  onChange={(e) =>
                    setOneWay((prev) => ({ ...prev, from: e.target.value as AirportCode }))
                  }
                >
                  {airportOptions.map((a) => (
                    <option key={a.code} value={a.code}>
                      {a.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <span className={styles.label}>ปลายทาง</span>
                <select
                  className={styles.input}
                  value={oneWay.to}
                  onChange={(e) =>
                    setOneWay((prev) => ({ ...prev, to: e.target.value as AirportCode }))
                  }
                >
                  {airportOptions.map((a) => (
                    <option key={a.code} value={a.code}>
                      {a.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <span className={styles.label}>วันเดินทาง</span>
                <input
                  className={styles.input}
                  type="date"
                  value={oneWay.date}
                  onChange={(e) => setOneWay((prev) => ({ ...prev, date: e.target.value }))}
                />
              </div>

              {tripType === 'round-trip' ? (
                <div className={styles.field}>
                  <span className={styles.label}>วันเดินทางกลับ</span>
                  <input
                    className={styles.input}
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                  />
                </div>
              ) : (
                <div className={styles.field}>
                  <span className={styles.label}>หมายเหตุ</span>
                  <div className={styles.hint}>เลือก One-way หรือ Round-trip ได้ที่ด้านบน</div>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className={styles.row}>
              <div className={styles.field}>
                <span className={styles.label}>เที่ยวบินที่ 1: ต้นทาง</span>
                <select
                  className={styles.input}
                  value={multiCity[0].from}
                  onChange={(e) =>
                    setMultiCity((prev) => [
                      { ...prev[0], from: e.target.value as AirportCode },
                      prev[1],
                    ])
                  }
                >
                  {airportOptions.map((a) => (
                    <option key={a.code} value={a.code}>
                      {a.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>เที่ยวบินที่ 1: ปลายทาง</span>
                <select
                  className={styles.input}
                  value={multiCity[0].to}
                  onChange={(e) =>
                    setMultiCity((prev) => [
                      { ...prev[0], to: e.target.value as AirportCode },
                      prev[1],
                    ])
                  }
                >
                  {airportOptions.map((a) => (
                    <option key={a.code} value={a.code}>
                      {a.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <span className={styles.label}>เที่ยวบินที่ 1: วันเดินทาง</span>
                <input
                  className={styles.input}
                  type="date"
                  value={multiCity[0].date}
                  onChange={(e) =>
                    setMultiCity((prev) => [
                      { ...prev[0], date: e.target.value },
                      prev[1],
                    ])
                  }
                />
              </div>
              <div className={styles.field}>
                <span className={styles.label}>หมายเหตุ</span>
                <div className={styles.hint}>Multi-city แสดง 2 เที่ยวบินเป็นค่าเริ่มต้น</div>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <span className={styles.label}>เที่ยวบินที่ 2: ต้นทาง</span>
                <select
                  className={styles.input}
                  value={multiCity[1].from}
                  onChange={(e) =>
                    setMultiCity((prev) => [
                      prev[0],
                      { ...prev[1], from: e.target.value as AirportCode },
                    ])
                  }
                >
                  {airportOptions.map((a) => (
                    <option key={a.code} value={a.code}>
                      {a.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>เที่ยวบินที่ 2: ปลายทาง</span>
                <select
                  className={styles.input}
                  value={multiCity[1].to}
                  onChange={(e) =>
                    setMultiCity((prev) => [
                      prev[0],
                      { ...prev[1], to: e.target.value as AirportCode },
                    ])
                  }
                >
                  {airportOptions.map((a) => (
                    <option key={a.code} value={a.code}>
                      {a.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <span className={styles.label}>เที่ยวบินที่ 2: วันเดินทาง</span>
                <input
                  className={styles.input}
                  type="date"
                  value={multiCity[1].date}
                  onChange={(e) =>
                    setMultiCity((prev) => [
                      prev[0],
                      { ...prev[1], date: e.target.value },
                    ])
                  }
                />
              </div>
              <div className={styles.field}>
                <span className={styles.label}>หมายเหตุ</span>
                <div className={styles.hint}>
                  ถ้าต้องการมากกว่า 2 เที่ยวบิน สามารถขยายต่อได้ภายหลัง
                </div>
              </div>
            </div>
          </>
        )}

        <div className={styles.row}>
          <div className={styles.field}>
            <span className={styles.label}>Adult</span>
            <input
              className={styles.input}
              type="number"
              min={1}
              max={9}
              value={adult}
              onChange={(e) => setAdult(Number(e.target.value))}
            />
          </div>
          <div className={styles.field}>
            <span className={styles.label}>Child</span>
            <input
              className={styles.input}
              type="number"
              min={0}
              max={9}
              value={child}
              onChange={(e) => setChild(Number(e.target.value))}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <span className={styles.label}>Infant</span>
            <input
              className={styles.input}
              type="number"
              min={0}
              max={9}
              value={infant}
              onChange={(e) => setInfant(Number(e.target.value))}
            />
          </div>
          <div className={styles.field}>
            <span className={styles.label}>รวมผู้โดยสาร</span>
            <div className={styles.hint}>{adult + child + infant} คน</div>
          </div>
        </div>

        <div className={styles.actions}>
          <span className={styles.hint}>กดค้นหาเพื่อเริ่มต่อกับ API ภายหลัง</span>
          <button className={styles.primaryButton} type="submit" disabled={!canSearch}>
            ค้นหาเที่ยวบิน
          </button>
        </div>
      </form>
    </section>
  );
}
