import './global.css';

export const metadata = {
  title: 'Nok Air',
  description: 'This is the web application for Nok Air',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
