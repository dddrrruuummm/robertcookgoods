import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export const metadata: Metadata = { title: "How to Order", description: "Choose everyday goods, review your enquiry and talk to Robert Andrew Cook about prices, availability and delivery on WhatsApp.", alternates: { canonical: "/how-to-order" } };
const steps = [
  { title: "Explore the products.", body: "Open a product for a closer look. Add the items you want to discuss to your enquiry list." },
  { title: "Review your enquiry.", body: "Adjust quantities and add any questions, preferred options or delivery details you want to discuss." },
  { title: "Continue on WhatsApp.", body: "Review the prepared message, then send it when you’re ready. Robert can help with product details and current pricing." },
  { title: "Confirm before ordering.", body: "Agree the products, total cost, payment method, delivery arrangements and applicable return terms with Robert before purchasing." },
];
const faqs = [
  ["Where are the prices?", "Ask Robert for current pricing for your chosen products and quantities. Availability and the full quote are confirmed in your conversation."],
  ["Can I ask about several products?", "Yes. Add products to your enquiry list and review the quantities before opening WhatsApp. They will be included in one message."],
  ["Can I ask a question without choosing a product?", "Yes. Open the enquiry page and add your question. You can also use a Chat with Robert button to start a general conversation."],
  ["Will opening WhatsApp send my message?", "No. WhatsApp opens with a draft. Review it, then tap Send when you’re ready."],
  ["Where can you deliver?", "Share your destination and ask Robert to confirm delivery availability, cost and estimated timing before ordering."],
  ["Does an enquiry place an order?", "An enquiry starts a conversation. Confirm the full details with Robert before agreeing to purchase. The website does not collect payments."],
];
export default function HowToOrderPage() {
  return <><section className="page-hero"><div className="container"><h1>Pick. Ask. Confirm.</h1><p className="page-lead">An easy way to turn your product list into a direct conversation with Robert.</p></div></section><section className="section"><div className="container process-layout"><div><h2>From a good find<br/>to your next step.</h2><p className="page-lead">Keep the items you like together. Get your questions answered before arranging an order.</p><Link className="button button-dark" href="/products">Find your goods <ArrowUpRight size={19}/></Link></div><ol className="process-steps">{steps.map(step => <li key={step.title}><h3>{step.title}</h3><p>{step.body}</p></li>)}</ol></div></section><section className="section faq-section"><div className="container process-layout"><div><h2>A few things<br/>to know.</h2><Link className="text-link" href="/contact">Prepare your enquiry <ArrowUpRight size={18}/></Link></div><div className="faq-list" id="questions">{faqs.map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div></section></>;
}
