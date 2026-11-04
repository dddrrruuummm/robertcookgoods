"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand } from "./brand";
import { EnquiryTrigger } from "./enquiry-provider";
const navigation = [["/products", "Products"], ["/about", "About"], ["/how-to-order", "How to order"], ["/contact", "Contact"]];
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return <><div className="announcement"><div className="container"><span>For the desk. For the home. For the everyday.</span><Link href="/how-to-order">Enquire directly with Robert <ArrowUpRight size={15}/></Link></div></div><header className="site-header"><div className="container header-inner"><Link href="/" aria-label="Robert Cook Goods home" className="brand-link" onClick={() => setOpen(false)}><Brand/></Link><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([href, label]) => <Link aria-current={path.startsWith(href) ? "page" : undefined} href={href} key={href}>{label}</Link>)}</nav><div className="header-actions"><EnquiryTrigger/><button className="menu-toggle icon-button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button></div></div>{open && <nav className="mobile-nav container" id="mobile-nav" aria-label="Mobile navigation">{navigation.map(([href, label]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={20}/></Link>)}</nav>}</header></>;
}
