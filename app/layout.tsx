import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideNavbar from "@/components/Navbar/sideNavbr";
import TopNavbar from "@/components/Navbar/topNavbar";
import {useRouter} from "next/navigation";
import {router} from "next/client";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <div>
            <SideNavbar/>
            <TopNavbar/>
          </div>
          <div className='page-content'>
            {children}
          </div>
        </body>
      </html>
  )
}
