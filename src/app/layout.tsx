import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: "Muhammad Rozaq Ma'ruf — UI/UX Designer & Full-Stack Developer",
  description: 'Portfolio of Muhammad Rozaq Ma\'ruf, UI/UX Designer and Full-Stack Developer. Designing intuitive digital experiences and building modern web applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <main>{children}</main>
      </body>
    </html>
  );
}
