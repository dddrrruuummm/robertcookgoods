import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Order",
  description: "Choose your products, prepare your enquiry and discuss availability, prices and delivery with Robert Andrew Cook on WhatsApp.",
  alternates: { canonical: "/how-to-order" },
};

const steps = [
  { number: "01", title: "Find the things you like.", body: "Browse the collection and open a product for a closer look. Add the items you’re interested in to your enquiry list, then adjust the quantities to suit your needs." },
  { number: "02", title: "Make the enquiry yours.", body: "Review your selected products and quantities. Add a note with any questions or the delivery location you would like Robert to consider." },
  { number: "03", title: "Continue on WhatsApp.", body: "Open your prepared WhatsApp message, check it, and send it when you’re ready. Robert can then discuss current availability, pricing and product details with you." },
  { number: "04", title: "Confirm the details together.", body: "Agree the exact items, quantities, total price, payment method, delivery arrangements and any applicable return terms with Robert before placing an order or making payment." },
];

const faqs = [
  { question: "Where can I see prices?", answer: "Ask Robert for a current quote. Pricing and availability are confirmed in your conversation for the items and quantities you request." },
  { question: "Can I ask about several products at once?", answer: "Yes. Add multiple products to your enquiry list and send them together. You can change quantities and remove items before opening WhatsApp." },
  { question: "Does sending an enquiry place an order?", answer: "Sending an enquiry starts a conversation. An order is only arranged after you and Robert have agreed its details." },
  { question: "Where can you deliver?", answer: "Share your delivery location with Robert. He will confirm whether delivery can be arranged, along with the cost and estimated timing, before you commit to a purchase." },
  { question: "How do I pay?", answer: "Payment is arranged directly with Robert after the order details are agreed. This website does not take payments or ask you to enter card details." },
  { question: "What about product details and returns?", answer: "Confirm the current product version, specifications and any return or warranty terms with Robert before ordering. Keep the agreed details in your conversation for reference." },
];

export default function HowToOrderPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">From browsing to a conversation</p>
          <h1>See something you like?<br /><em>Let’s talk about it.</em></h1>
          <p className="page-lead">Choose your products, prepare an enquiry and confirm the details with Robert on WhatsApp.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div><p className="eyebrow">How it works</p><h2>A few simple steps.<br />A personal reply.</h2><p className="page-lead">Take your time with the collection. Your enquiry list keeps the products you want to discuss together.</p><Link className="button button-dark" href="/products">Browse all products <span aria-hidden="true">↗</span></Link></div>
          <ol className="numbered-steps">
            {steps.map((step) => <li className="step" key={step.number}><span className="step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div><p className="eyebrow">A few useful answers</p><h2>Before you<br />get in touch.</h2><Link className="text-link" href="/contact">Prepare your enquiry <span aria-hidden="true">↗</span></Link></div>
          <div className="faq-list" id="questions">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
        </div>
      </section>
    </>
  );
}
