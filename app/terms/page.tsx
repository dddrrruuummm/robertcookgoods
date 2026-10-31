import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Terms", description: "Product browsing, enquiries and order arrangements at Robert Cook Goods.", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><p className="eyebrow">The useful details</p><h1>Clear from the start.</h1><p className="page-lead">A few things to know about browsing, enquiries and arranging a purchase.</p></div></section>
      <div className="container section legal-layout">
        <aside className="legal-aside"><p className="eyebrow">Website terms</p><p>Updated October 31, 2026</p><Link className="text-link" href="/how-to-order">How to order <span aria-hidden="true">↗</span></Link></aside>
        <div className="legal-content prose">
          <section><h2>About this storefront</h2><p>Robert Cook Goods offers home and desk essentials through direct enquiries with Robert Andrew Cook. Explore the collection and discuss the details with Robert before placing an order.</p></section>
          <section><h2>Product information</h2><p>Descriptions and images help you explore the collection and prepare questions. They do not confirm current stock, an exact product specification or a delivery commitment.</p><p>Before purchasing, ask Robert to confirm the current item, materials, dimensions, features, included accessories and any other details that matter to you. Product appearance and available versions may differ from the images shown.</p></section>
          <section><h2>Enquiries and quotes</h2><p>Adding products to a list or sending a WhatsApp enquiry does not place an order or reserve stock. Prices, availability and quantities are confirmed directly with Robert.</p><p>Review the full quote, including any delivery costs and other applicable charges, before agreeing to purchase. No payment is collected through this website.</p></section>
          <section><h2>Arranging an order</h2><p>Orders are arranged directly in your conversation with Robert. Confirm the products, quantities, total cost, payment method, delivery location and estimated timing before making payment.</p><p>Ask about any applicable returns, cancellations and warranty arrangements before ordering, and keep a copy of the agreed details.</p></section>
          <section><h2>Using the website</h2><p>Use the enquiry tools to ask about products and provide accurate information relevant to your request. Links to WhatsApp open an external service with its own terms and availability.</p><p>If anything about a product or a proposed purchase is unclear, ask Robert before proceeding.</p><Link className="text-link" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link></section>
        </div>
      </div>
    </>
  );
}
