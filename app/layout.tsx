import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "AutoMax Miami | Quality Used Cars", description: "Affordable used cars and flexible financing in Miami, Florida." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
