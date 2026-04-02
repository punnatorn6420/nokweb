import { SidebarProvider } from '@workspace/shared-ui/ui/sidebar';
import './global.css';
import { ReactNode } from 'react';
import { AppHeader } from '../components/header';
import { AppSidebar } from '../components/sidebar';

export const metadata = {
  title: 'Nok Studio',
  description:
    'CMS shell matching Kirimase docs style with shadcn/ui + Tailwind',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <SidebarProvider defaultOpen>
          <div className="min-h-screen bg-white">
            <AppHeader />
            <div className="flex">
              <div className="hidden md:block">
                <AppSidebar />
              </div>
              <main className="min-w-0 flex-1">
                <div className="mx-auto max-w-350 px-4 py-2">{children}</div>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
