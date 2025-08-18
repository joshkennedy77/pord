// File: app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = { /* … */ };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 👇 add suppressHydrationWarning
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {/* header/nav … */}
        <main className="mx-auto max-w-7xl px-4 py-10">{children}</main>
        {/* footer … */}
      </body>
    </html>
  );
}
