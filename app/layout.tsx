import "./globals.css";
import { Inter } from "next/font/google";
import TabBar from "@/components/tabbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-100"}>
        {children}
        <TabBar />
      </body>
    </html>
  );
}