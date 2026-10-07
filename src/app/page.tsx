"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
import {getBusinessSettings,type BusinessSettings} from "@/lib/firebase/data";

const phone="71638995";
const whatsapp="26771638995";

const services=[
 {number:"01",title:"Roof waterproofing",text:"Protection and repair work for roof water problems, leaks and areas that need attention."},
 {number:"02",title:"Wall waterproofing",text:"Practical help for damp, leaking and water-related wall problems."},
 {number:"03",title:"Damage analysis",text:"Start with the free damage analysis supplied by Exquisite and explain what you are seeing."},
];

export default function Home(){
 const[settings,setSettings]=useState<BusinessSettings|null>(null);
 useEffect(()=>{void getBusinessSettings().then(setSettings).catch(()=>setSettings(null))},[]);
 const serviceText=settings?.serviceText||"For all your roofing and wall waterproofing";
 const currentPhone=settings?.phone||phone;
 const currentWhatsapp=settings?.whatsapp||whatsapp;
 return <main className="site">
  <div className="utility"><div className="container utilityInner"><span>EXQUISITE WATERPROOF SERVICES</span><span>Free Damage Analysis · Flexible Payment Terms</span><a href={"tel:"+currentPhone}>Call {currentPhone}</a></div></div>

  <header className="nav"><div className="container navInner">
   <Link href="/" className="brand"><span className="brandMark">E</span><span>EXQUISITE</span></Link>
   <nav className="navLinks" aria-label="Main navigation"><a href="#services">Services</a><a href="#process">How it works</a><a href="#contact">Contact</a></nav>
   <div className="navActions"><a className="button buttonGhost" href={"tel:"+currentPhone}>Call</a><a className="button buttonPrimary" href={"https://wa.me/"+currentWhatsapp}>WhatsApp</a></div>
  </div></header>

  <section className="hero"><div className="heroTexture"></div><div className="container heroGrid">
   <div className="heroCopy">
    <span className="eyebrow">ROOFING · WATERPROOFING · BOTSWANA</span>
    <h1>Keep water<br/><em>where it belongs.</em></h1>
    <p className="heroLead">{serviceText}.</p>
    <div className="actions"><Link className="button buttonPrimary buttonLarge" href="/order">Request damage analysis</Link><a className="button buttonGhost buttonLarge" href={"https://wa.me/"+currentWhatsapp}>WhatsApp {currentPhone}</a></div>
    <div className="proofStrip"><div><strong>FREE</strong><span>Damage Analysis</span></div><div><strong>FLEXIBLE</strong><span>Payment Terms</span></div><div><strong>NO ACCOUNT</strong><span>Needed to enquire</span></div></div>
   </div>
   <div className="heroArt" aria-hidden="true"><div className="artRoof"></div><div className="artHouse"><span></span><span></span><span></span></div><div className="rain"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div className="artLabel">EXQUISITE<br/><small>WATERPROOF SERVICES</small></div></div>
  </div></section>

  <section className="section services" id="services"><div className="container">
   <div className="sectionIntro"><div><span className="kicker">What needs fixing?</span><h2>Start with the problem.</h2></div><p>Tell us what you are seeing. Exquisite can follow up from the details you provide and arrange the next step.</p></div>
   <div className="serviceGrid">{services.map(service=><article className="serviceCard" key={service.number}><span className="serviceNumber">{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><Link href="/order" aria-label={"Request "+service.title}>→</Link></article>)}</div>
  </div></section>

  <section className="statement"><div className="container statementGrid"><div><span className="kicker">A simple promise</span><h2>Assess it.<br/><em>Explain it.</em><br/>Fix the problem.</h2></div><div><p>Exquisite is built around a straightforward customer journey: describe the damage, request an analysis, speak with the business, then agree the work and payment terms directly.</p><Link className="textLink" href="/order">Start your enquiry <span>→</span></Link></div></div></section>

  <section className="process" id="process"><div className="container"><div className="sectionIntro light"><div><span className="kicker">How it works</span><h2>From problem to follow-up.</h2></div><p>No complicated customer account. Start with the information you already have.</p></div>
   <div className="processGrid"><article><b>01</b><h3>Tell us</h3><p>Describe the roof or wall problem and leave a phone / WhatsApp number.</p></article><article><b>02</b><h3>Damage analysis</h3><p>Exquisite reviews the request and follows up with you about the problem.</p></article><article><b>03</b><h3>Agree the work</h3><p>Scope, price and payment terms are confirmed directly before work proceeds.</p></article><article><b>04</b><h3>Follow through</h3><p>Use the conversation with Exquisite to move the job from assessment toward completion.</p></article></div>
  </div></section>

  <section className="cta" id="contact"><div className="container ctaGrid"><div><span className="kicker">Ready when you are</span><h2>Water damage doesn't wait.</h2><p>Send the details while the problem is fresh. You can also call or WhatsApp Exquisite directly.</p></div><div className="ctaCard"><span>EXQUISITE WATERPROOF SERVICES</span><strong>{currentPhone}</strong><div className="actions"><Link className="button buttonPrimary" href="/order">Request analysis</Link><a className="button buttonDark" href={"https://wa.me/"+currentWhatsapp}>WhatsApp</a></div></div></div></section>

  <footer className="footer"><div className="container footerInner"><div className="brandFooter"><span className="brandMark">E</span><div><strong>EXQUISITE WATERPROOF SERVICES</strong><span>{serviceText}</span></div></div><div className="footerLinks"><Link href="/order">Damage analysis</Link><a href={"tel:"+currentPhone}>Call {currentPhone}</a><a href={"https://wa.me/"+currentWhatsapp}>WhatsApp</a><Link href="/admin">Operations</Link></div></div></footer>
 </main>
}