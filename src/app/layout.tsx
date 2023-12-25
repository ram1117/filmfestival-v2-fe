import type { Metadata } from "next";
import { oswald, robotocondensed, roboto, lato } from "@/atoms/fonts";
import "./globals.css";
import MenuBar from "@/components/navbar/MenuBar";
import NavBar from "@/components/navbar/NavBar";
import MainFooter from "@/components/footer/MainFooter";
import dynamic from "next/dynamic";

const BreadCrumb = dynamic(() => import("@/components/breadcrumb/BreadCrumb"), {
  ssr: false,
});

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
      className={`${oswald.variable} ${robotocondensed.variable} ${roboto.variable} ${lato.variable}`}
    >
      <body className="font-roboto">
        <MenuBar />
        <NavBar />
        <div className="hidden md:block absolute right-10 md:top-28 lg:top-32">
          <BreadCrumb />
        </div>

        {children}
        <MainFooter />
      </body>
    </html>
  );
}
