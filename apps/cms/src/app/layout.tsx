import './global.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Nok Studio',
  description:
    'CMS shell matching Kirimase docs style with shadcn/ui + Tailwind',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
