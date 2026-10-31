import type { Metadata } from "next";
import { CollectionBrowser } from "@/components/collection-browser";
import { categories } from "@/lib/products";

export const metadata: Metadata = {
  title: "The Collection",
  description: "Explore everyday essentials for home and work at Robert Cook Goods. Build an enquiry and ask Robert about current prices and availability on WhatsApp.",
  alternates: { canonical: "/products" },
};

type ProductsPageProps = {
  searchParams: Promise<{ category?: string | string[]; q?: string | string[] }>;
};

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] || "" : value || "";
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const requestedCategory = firstValue(params.category);
  const category = categories.find((item) => item === requestedCategory) || "All products";
  const query = firstValue(params.q);

  return (
    <>
      <section className="page-hero"><div className="container"><p className="eyebrow">The everyday collection</p><h1>Good things.<br /><em>Your way.</em></h1><p className="page-lead">Home and work essentials, selected for everyday living. Find the things you like, then ask Robert about current pricing and availability on WhatsApp.</p></div></section>
      <section className="section collection-section"><div className="container"><CollectionBrowser key={`${category}:${query}`} initialCategory={category} initialQuery={query} /></div></section>
    </>
  );
}
