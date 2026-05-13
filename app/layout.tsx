import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import ClientOnly from "./Components/ClientOnly";
import Modal from "./Components/Modals/Modal";
import RegisterModal from "./Components/Modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./Components/Modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./Components/Modals/RentModal";
import SearchModal from "./Components/Modals/SearchModal";

const nuNito = Nunito({
  subsets: ["latin"]
})
  
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb tapi",
  description: "Clone doang bang",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body
        className={nuNito.className}
        suppressHydrationWarning
      >
        <ClientOnly>
          <ToasterProvider/>
          <SearchModal/>
          <RentModal/>
          <LoginModal/>
          <RegisterModal/>
          <Navbar currentUser = {currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
        
      </body>
    </html>
  );
}
