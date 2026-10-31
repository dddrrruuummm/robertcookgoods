import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy", description: "How Robert Cook Goods handles your browser selection and WhatsApp enquiry.", alternates: { canonical: "/privacy-policy" } };

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero"><div className="container"><p className="eyebrow">The useful details</p><h1>Your privacy.</h1><p className="page-lead">How information is handled while you browse and prepare an enquiry.</p></div></section>
      <div className="container section legal-layout">
        <aside className="legal-aside"><p className="eyebrow">Privacy policy</p><p>Updated October 31, 2026</p><Link className="text-link" href="/contact">Contact Robert <span aria-hidden="true">↗</span></Link></aside>
        <div className="legal-content prose">
          <section><h2>Browsing this website</h2><p>Robert Cook Goods is a product collection and enquiry website for Robert Andrew Cook. You can browse the collection without creating an account. This website does not provide an online checkout or request payment card details.</p><p>The website does not include third-party analytics or advertising trackers. A hosting provider may process basic technical information needed to deliver the pages, such as connection information and request logs.</p></section>
          <section><h2>Your enquiry selection</h2><p>Your selected products and quantities are kept in your browser so you can review them while browsing. These details are not submitted to a website enquiry database.</p><p>You can remove items from your enquiry list or clear this website’s stored data in your browser settings. If you enter a note, review it before sharing and include only the information needed for your enquiry.</p></section>
          <section><h2>Continuing on WhatsApp</h2><p>When you choose to continue on WhatsApp, the website prepares a draft containing the products, quantities and note you have chosen to share. Opening the link transfers that draft to WhatsApp. You decide whether to send the message to Robert.</p><p>WhatsApp operates under its own privacy terms. Information you send in a conversation, including your WhatsApp profile and any delivery details you choose to provide, is handled through that service and by Robert for the purpose of responding to your enquiry and discussing a possible purchase.</p></section>
          <section><h2>Questions about your information</h2><p>Contact Robert through the enquiry page if you have questions about information you have shared with him. Please identify the relevant conversation so he can understand your request.</p><Link className="text-link" href="/contact">Go to enquiries <span aria-hidden="true">↗</span></Link></section>
        </div>
      </div>
    </>
  );
}
