import type {MetadataRoute} from "next";
import {site} from "@/lib/site";
export default function robots():MetadataRoute.Robots{return process.env.NEXT_PUBLIC_SITE_LIVE==="true"?{rules:{userAgent:"*",allow:"/"},sitemap:`${site.url}/sitemap.xml`}:{rules:{userAgent:"*",disallow:"/"}}}
