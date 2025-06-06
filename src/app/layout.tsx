// src/app/layout.tsx

// additional import
import { Providers } from "@/provider";
// import { geistSans, geistMono } from "@geist-ui/react/fonts";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
        >
            {/* // Wrap provider around children */}
            <Providers>{children}</Providers>
        </body>
    </html>
  );
}