import type { Metadata } from "next";
import { oswald, robotocondensed, roboto } from "@/atoms/fonts";
import "./globals.css";
import MenuBar from "@/components/navbar/MenuBar";
import NavBar from "@/components/navbar/NavBar";

export const metadata: Metadata = {
  title: "Film Festival",
  description: "Film Festival landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${robotocondensed.variable} ${roboto.variable}`}
    >
      <body className="font-roboto">
        <MenuBar />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
