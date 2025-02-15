
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";



const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Dashboardlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<>
<link rel="icon" type="image/png" href="/images/favicon.png" />
<link rel="stylesheet" href="/css/app.css" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
  {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
   <div id="root" className="min-h-screen flex grow bg-slate-50 dark:bg-navy-900" x-cloak>




          {/* <div className="wrapper"> */}
        
          <Sidebar/>
          <Topbar/>
            
            
            <main className="main-content">{children}</main>
            
          </div>
      

        {/* External Scripts */}
        <script src="/js/app.js" defer></script>

<script src="/js/libs/components.js" defer></script>

<script src="/js/pages/dashboards-crm-analytics.js"></script>
     
    </>
  );
}






 

