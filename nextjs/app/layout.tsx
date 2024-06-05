import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from '@chakra-ui/react'
import { Main } from "next/document";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon:['/favicon.ico']
  },
  title: "Trải nghiệm sức mạnh của HĐH Windows 11, Máy tính & Ứng dụng | Microsoft",
  description: "Khám phá tính linh hoạt của hệ điều hành Windows 11 do Microsoft cung cấp. Tìm hiểu cách Hệ điều hành Windows mới nhất của chúng tôi cung cấp cho bạn nhiều cách hơn để làm việc, giải trí và sáng tạo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider> 
          <Navbar/>
          <main> 
             {children} 
          </main>
          <Footer/>
        </ChakraProvider>
      </body>
    </html>
  );
}
