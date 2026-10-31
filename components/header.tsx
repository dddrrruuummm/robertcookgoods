"use client";
import Link from "next/link";
import {useState} from "react";
import {usePathname} from "next/navigation";
import {ArrowUpRight,Menu,X} from "lucide-react";
import {Brand} from "./brand";
import {EnquiryTrigger,WhatsAppLink} from "./enquiry-provider";
const navigation=[["/products","The collection"],["/about","Meet Robert"],["/how-to-order","How it works"]];
export function Header(){const[open,setOpen]=useState(false);const path=usePathname();return <><div className="announcement"><div className="container"><span>Everyday goods by KKANG. A personal conversation with Robert.</span><Link href="/how-to-order">Choose. Enquire. Make it yours.<ArrowUpRight size={12}/></Link></div></div><header className="site-header"><div className="container header-inner"><Link href="/" aria-label="Robert Cook Goods home" className="brand-link" onClick={()=>setOpen(false)}><Brand/></Link><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([href,label])=><Link aria-current={path.startsWith(href)?"page":undefined} href={href} key={href}>{label}</Link>)}</nav><div className="header-actions"><EnquiryTrigger/><WhatsAppLink className="header-whatsapp"/><button className="menu-toggle icon-button" aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)}>{open?<X size={22}/>:<Menu size={22}/>}</button></div></div>{open&&<nav className="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">{[...navigation,["/contact","Contact Robert"]].map(([href,label])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}<ArrowUpRight size={17}/></Link>)}</nav>}</header></>}
