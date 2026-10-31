import type {Metadata,Viewport} from "next";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import {EnquiryProvider} from "@/components/enquiry-provider";
import {site} from "@/lib/site";
import "./globals.css";
const live=process.env.NEXT_PUBLIC_SITE_LIVE==="true";
export const metadata:Metadata={metadataBase:new URL(site.url),alternates:{canonical:site.url},title:{default:"Robert Cook Goods | Good Things for Everyday Living",template:"%s | Robert Cook Goods"},description:"Discover KKANG home and desk essentials with Robert Andrew Cook. Explore the collection, build an enquiry and talk through the details on WhatsApp.",openGraph:{title:"Robert Cook Goods",description:"Good things for everyday living. Curated from KKANG. Enquiries with Robert Andrew Cook.",type:"website",locale:"en_US",images:[{url:"/products/kkang-hero.png",width:1672,height:941,alt:"Thoughtfully arranged everyday home and work objects"}]},twitter:{card:"summary_large_image"},robots:{index:live,follow:live},icons:{icon:"/icon.svg"}};
export const viewport:Viewport={themeColor:"#39442e"};
const schema={"@context":"https://schema.org","@type":"WebSite",name:site.name,url:site.url,inLanguage:"en-US",description:site.tagline,publisher:{"@type":"Person",name:site.owner,telephone:`+${site.whatsappNumber}`,address:{"@type":"PostalAddress",streetAddress:site.address.street,addressLocality:site.address.city,addressRegion:site.address.state,postalCode:site.address.postalCode,addressCountry:site.address.country}}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-scroll-behavior="smooth"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><a className="skip-link" href="#main-content">Skip to content</a><EnquiryProvider><Header/><main id="main-content">{children}</main><Footer/></EnquiryProvider></body></html>}
