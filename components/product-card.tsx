import Image from "next/image";
import Link from "next/link";
import type {Product} from "@/lib/products";
import {AddToEnquiry} from "./enquiry-provider";
import {ArrowUpRight} from "lucide-react";
export function ProductCard({product,priority=false}:{product:Product;priority?:boolean}){return <article className="product-card"><Link className="product-card-image" href={`/products/${product.id}`}><Image src={product.image} alt={product.name} fill sizes="(max-width:650px) 90vw,(max-width:1000px) 46vw,30vw" priority={priority}/><span className="product-image-brand">KKANG</span><span className="product-view" aria-label={`View ${product.name}`}><ArrowUpRight size={20}/></span></Link><div className="product-card-meta"><span>{product.category}</span><span>RC-{product.number}</span></div><Link className="product-card-title" href={`/products/${product.id}`}><h3>{product.name}</h3></Link><p>{product.description}</p><div className="product-card-bottom"><span>Ask for pricing</span><AddToEnquiry productId={product.id}/></div></article>}
