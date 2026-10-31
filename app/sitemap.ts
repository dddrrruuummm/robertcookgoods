import type {MetadataRoute} from "next";
import {site} from "@/lib/site";
import {products} from "@/lib/products";
export default function sitemap():MetadataRoute.Sitemap{return ["","/products","/about","/how-to-order","/contact","/privacy-policy","/terms",...products.map(p=>`/products/${p.id}`)].map(path=>({url:`${site.url}${path}`,lastModified:"2026-10-31"}))}
