import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Robert",
  description: "Meet Robert Andrew Cook, your contact for a selection of KKANG home and desk products and direct WhatsApp enquiries.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Robert Cook Goods</p>
          <h1>Everyday goods.<br /><em>A direct conversation.</em></h1>
          <p className="page-lead">A selection of KKANG home and desk products, offered for resale by Robert Andrew Cook.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">The person behind the conversation</p>
            <h2>Talk to Robert.</h2>
            <div className="prose">
              <p>Robert Andrew Cook is your contact for the products shown in this collection. Browse the range, gather the items you like, and start a conversation about what you need.</p>
              <p>The selection brings together KKANG objects for working, organizing and unwinding at home. Each product page gives you a starting point for asking about the current version, availability and price.</p>
              <p>Your enquiry goes directly into a WhatsApp conversation with Robert. Quantities, delivery arrangements and the details of any purchase are agreed there before an order is placed.</p>
            </div>
            <Link href="/products" className="text-link">Explore the collection <span aria-hidden="true">↗</span></Link>
          </div>
          <aside className="info-panel">
            <p className="eyebrow">Your point of contact</p>
            <div className="about-signature" aria-hidden="true">Robert Cook</div>
            <h3>Robert Andrew Cook</h3>
            <p>Product enquiries &amp; resale</p>
            <p>A personal conversation about the items you choose, from the first question to the details of your order.</p>
            <Link href="/contact" className="button button-dark">Start an enquiry <span aria-hidden="true">↗</span></Link>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">A simple way to shop</p><h2>A little more considered.</h2></div></div>
          <div className="values-grid">
            <article className="value-card"><p className="eyebrow">01 / Browse</p><h3>Find your everyday.</h3><p>Explore objects for a clearer desk, a comfortable workday and the small routines around your home.</p></article>
            <article className="value-card"><p className="eyebrow">02 / Ask</p><h3>Get the details.</h3><p>Ask Robert about the item, the quantity you need, its current price and the options available.</p></article>
            <article className="value-card"><p className="eyebrow">03 / Confirm</p><h3>Agree before ordering.</h3><p>Review the product details, total cost and delivery arrangements in your conversation before making a purchase.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
