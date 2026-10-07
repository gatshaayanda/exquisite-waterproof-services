import type {Metadata,Viewport} from "next";
import {Analytics} from "@vercel/analytics/next";
import {SpeedInsights} from "@vercel/speed-insights/next";
import PwaRegister from "@/app/pwa-register";
import "./globals.css"; import "./pwa.css";
const siteUrl=process.env.NEXT_PUBLIC_BASE_URL||"https://exquisite-waterproof-services.vercel.app";
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:"Exquisite Waterproof Services",template:"%s | Exquisite Waterproof Services"},description:"For all your roofing and wall waterproofing. Free Damage Analysis. Flexible Payment Terms.",applicationName:"Exquisite Waterproof Services",keywords:["Exquisite Waterproof Services","waterproofing","roofing","wall waterproofing","Botswana"],alternates:{canonical:"/"},openGraph:{type:"website",url:siteUrl,siteName:"Exquisite Waterproof Services",title:"Exquisite Waterproof Services",description:"For all your roofing and wall waterproofing."},twitter:{card:"summary",title:"Exquisite Waterproof Services",description:"For all your roofing and wall waterproofing."},icons:{icon:"/icons/exquisite-192.svg?v=5",apple:"/icons/exquisite-192.svg?v=5"},manifest:"/manifest.webmanifest",appleWebApp:{capable:true,title:"Exquisite Waterproof",statusBarStyle:"default"}};
export const viewport:Viewport={themeColor:"#123B2A",colorScheme:"light"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><PwaRegister/>{children}<Analytics/><SpeedInsights/></body></html>}