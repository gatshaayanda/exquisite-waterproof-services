import type { MetadataRoute } from "next";
const baseUrl=process.env.NEXT_PUBLIC_BASE_URL||"https://exquisite-waterproof-services.vercel.app";
export default function sitemap():MetadataRoute.Sitemap{return[
 {url:baseUrl,changeFrequency:"weekly",priority:1},
 {url:baseUrl+"/order",changeFrequency:"weekly",priority:.8}
]};
