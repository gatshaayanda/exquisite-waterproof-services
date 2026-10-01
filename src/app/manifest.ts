import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
 return {name:"Exquisite Waterproof Services",short_name:"Exquisite Waterproof",description:"Roofing and wall waterproofing. Free Damage Analysis. Flexible Payment Terms.",start_url:"/",display:"standalone",background_color:"#08140F",theme_color:"#123B2A",orientation:"portrait-primary",lang:"en",categories:["business","construction","utilities"],icons:[{src:"/icon.svg",sizes:"any",type:"image/svg+xml",purpose:"any"},{src:"/icon.svg",sizes:"any",type:"image/svg+xml",purpose:"maskable"}]};
}