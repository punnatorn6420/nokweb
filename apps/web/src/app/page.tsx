import { Badge, Button, Card, Input } from '@workspace/shared-ui';
import { ArrowUpIcon } from 'lucide-react';

export default async function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <section className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-3 text-center">
          <Badge className="rounded-full px-3 py-1">
            Tailwind + shadcn/ui test
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Nok Air Frontend UI Test
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600">
            หน้านี้ใช้ Tailwind CSS และ shared shadcn ui เพื่อทดสอบว่า config
            ใช้งานได้จริง
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Tailwind CSS Test
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              กล่องนี้ใช้ utility classes เช่น spacing, rounded, shadow,
              responsive grid
            </p>
          </Card>

          <Card className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              shadcn ui Test
            </h2>

            <div className="mt-4 space-y-3">
              <Input placeholder="ลองพิมพ์ข้อความตรงนี้" />
              <div className="flex flex-wrap gap-3">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline" size="lg">
                  Outline
                </Button>
                <div className="flex flex-wrap items-center gap-2 md:flex-row">
                  <Button variant="outline">Button</Button>
                  <Button variant="outline" size="icon" aria-label="Submit">
                    <ArrowUpIcon />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 bg-slate-200 p-4 mt-10 gap-4">
        <div className="col-span-2 bg-slate-400">01</div>
        <div className="col-span-2 bg-slate-400">02</div>
        <div className="bg-slate-400">03</div>
        <div className="bg-slate-400">04</div>
        <div className="bg-slate-400">05</div>
      </div>
    </main>
  );
}
