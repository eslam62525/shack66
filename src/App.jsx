import React, { useState } from 'react';
import { ArrowUpRight, ArrowDown, Menu as MenuIcon, X, Instagram, Facebook, MapPin, Phone, Clock, Mail, Flame } from 'lucide-react';

const dishes = [
  { name: 'SHACK SIGNATURE BURGER', cat: 'Burgers', desc: 'A signature SHACK66 burger, freshly prepared and served hot.', img: '/images/shack-burger.jpg' },
  { name: 'SHARE PLATTER', cat: 'Platters', desc: 'A generous mix of favourites made for sharing.', img: '/images/share-platter.jpg' },
  { name: 'TOASTED WRAP', cat: 'Bites', desc: 'A toasted wrap packed with fresh, satisfying flavours.', img: '/images/toasted-wrap.jpg' },
  { name: 'SIGNATURE DRINKS', cat: 'Drinks', desc: 'Colourful, refreshing drinks from the SHACK66 range.', img: '/images/signature-drinks.jpg' },
  { name: 'LOADED SIDES', cat: 'Sides', desc: 'Golden sides and delicious extras for the table.', img: '/images/loaded-sides.jpg' },
  { name: 'GRILLED BITES', cat: 'Platters', desc: 'Tender grilled bites, perfect for sharing.', img: '/images/grilled-bites.jpg' },
  { name: 'RICE BOWL', cat: 'Mains', desc: 'A hearty bowl topped with a generous serving.', img: '/images/rice-bowl.jpg' },
  { name: 'LOADED FRIES', cat: 'Sides', desc: 'Crispy fries with a rich, savoury topping.', img: '/images/loaded-fries.jpg' },
  { name: 'STEAK PLATE', cat: 'Mains', desc: 'A satisfying plate served with classic sides.', img: '/images/steak-plate.jpg' },
];
const pics = ['/images/share-platter.jpg', '/images/signature-drinks.jpg', '/images/shack-burger.jpg', '/images/steak-plate.jpg'];
const address = '10/66 Christina Rd, Sydney, NSW, Australia, 2163';
const phone = '+61 405 481 482';
const email = 'info@shack66.com.au';
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=10%2F66%20Christina%20Rd%2C%20Sydney%2C%20NSW%202163%2C%20Australia';
const Eyebrow = ({ children }) => <div className="eyebrow"><i />{children}</div>;

export default function App() {
  const [open, setOpen] = useState(false);
  const [cat, setCat] = useState('All');
  const shown = cat === 'All' ? dishes : dishes.filter(d => d.cat === cat);
  const close = () => setOpen(false);
  return <div className="app">
    <div className="announcement"><span>GOOD FOOD. NO SHORTCUTS.</span><span><Flame size={12} /> BUILT FOR BIG CRAVINGS</span></div>
    <header className="header">
      <a className="logo" href="#home" onClick={close} aria-label="SHACK66 home"><img src="/images/shack66-logo.png" alt="SHACK66 — Shackin’ BBQ and Grill" /></a>
      <nav className={open ? 'nav open' : 'nav'}><a href="#home" onClick={close}>HOME</a><a href="#story" onClick={close}>OUR STORY</a><a href="#menu" onClick={close}>THE MENU</a><a href="#vibe" onClick={close}>THE VIBE</a><a href="#contact" onClick={close}>CONTACT</a><a className="nav-cta mobile" href={`tel:${phone.replaceAll(' ', '')}`} onClick={close}>CALL SHACK66 ↗</a></nav>
      <a className="nav-cta desktop" href={`tel:${phone.replaceAll(' ', '')}`}>CALL SHACK66 <Phone size={15} /></a>
      <button className="toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <MenuIcon />}</button>
    </header>
    <main>
      <section className="hero" id="home"><div className="hero-photo" /><div className="hero-shade" /><div className="hero-copy"><Eyebrow>WELCOME TO SHACK66</Eyebrow><h1>BIG BITES.<br /><span>BIGGER</span><br />ATTITUDE.</h1><p>Good food, bold flavours and generous portions. Discover the real SHACK66 experience in Sydney.</p><div className="hero-actions"><a className="btn" href="#menu">EXPLORE THE MENU <ArrowUpRight size={17} /></a><a className="plain-link" href="#contact">FIND THE SHACK <ArrowDown size={15} /></a></div></div><div className="stamp">FRESH<br />NEVER<br />FAKE<strong>66</strong></div><div className="hero-foot"><span>FRESHLY MADE · SERVED WITH ATTITUDE</span><span>SYDNEY, AUSTRALIA</span></div></section>
      <div className="ticker">BURGERS　✳　BITES　✳　SHAKES　✳　GOOD TIMES　✳　BURGERS　✳　BITES　✳　SHAKES　✳　GOOD TIMES　✳</div>
      <section className="story section" id="story"><div className="story-img"><img src="/images/shack-burger.jpg" alt="SHACK66 signature burger" /><span>MADE<br />FRESH<br />DAILY</span></div><div><Eyebrow>THE SHACK66 WAY</Eyebrow><h2>GOOD FOOD.<br /><em>BIG ENERGY.</em></h2><p>SHACK66 brings together bold comfort food, generous plates and refreshing drinks. Come through with your people, find your favourites and enjoy the Shack experience.</p><a className="line-link" href="#menu">EXPLORE THE FOOD <ArrowUpRight size={16} /></a></div></section>
      <section className="menu section" id="menu"><div className="section-top"><div><Eyebrow>STRAIGHT FROM THE SHACK</Eyebrow><h2>THE <em>MENU.</em></h2></div><p>Real SHACK66 food photography.<br />Find something you'll love.</p></div><div className="filters">{['All', 'Burgers', 'Platters', 'Bites', 'Sides', 'Drinks', 'Mains'].map(x => <button className={cat === x ? 'active' : ''} onClick={() => setCat(x)} key={x}>{x.toUpperCase()}</button>)}</div><div className="dish-grid">{shown.map((d, i) => <article className="dish" key={d.name}><div className="dish-img"><img src={d.img} alt={d.name} loading="lazy" /><b>{String(i + 1).padStart(2, '0')}</b></div><div className="dish-info"><div><h3>{d.name}</h3><p>{d.desc}</p></div></div></article>)}</div><small className="sample">Menu labels are descriptive; please confirm official item names and prices with SHACK66 before publishing.</small></section>
      <section className="vibe" id="vibe"><div className="vibe-bg" /><div className="vibe-shade" /><div className="vibe-copy"><Eyebrow>GOOD FOOD. BETTER COMPANY.</Eyebrow><h2>COME HUNGRY.<br /><em>LEAVE HAPPY.</em></h2><p>Bring your friends, share a platter or grab your favourites. There's always a reason to visit SHACK66.</p><a className="btn" href={mapUrl} target="_blank" rel="noreferrer">GET DIRECTIONS <ArrowUpRight size={17} /></a></div></section>
      <section className="gallery section"><div className="section-top"><div><Eyebrow>A LITTLE TASTE OF THE VIBE</Eyebrow><h2>INSIDE THE <em>SHACK.</em></h2></div><small>REAL SHACK66 PHOTOS ↗</small></div><div className="gallery-grid">{pics.map((p, i) => <div className={'g g' + (i % 4)} key={p}><img src={p} alt={'SHACK66 food and drinks ' + (i + 1)} loading="lazy" /></div>)}</div></section>
      <section className="order section" id="contact"><div className="order-copy"><Eyebrow>COME VISIT US</Eyebrow><h2>YOUR TABLE.<br /><em>YOUR CALL.</em></h2><p>Find SHACK66 in Sydney. Call us or send an email for enquiries.</p><div className="detail"><Clock size={17} /> OPENING HOURS — 3:00 PM TO 6:00 AM</div><div className="detail"><Phone size={17} /> {phone}</div><div className="detail"><Mail size={17} /> {email}</div><div className="detail"><MapPin size={17} /> {address}</div></div><div className="contact-panel"><div className="form-head"><span>01 / FIND US</span><b>SEE YOU AT THE SHACK.</b></div><p>We're ready when you are. Check the map for directions, give us a call, or get in touch by email.</p><a className="btn contact-btn" href={mapUrl} target="_blank" rel="noreferrer">OPEN GOOGLE MAPS <ArrowUpRight size={17} /></a><a className="line-link" href={`tel:${phone.replaceAll(' ', '')}`}>CALL SHACK66 <Phone size={15} /></a></div></section>
    </main>
    <footer><div className="footer-grid"><div><a className="logo" href="#home" aria-label="SHACK66 home"><img src="/images/shack66-logo.png" alt="SHACK66 — Shackin’ BBQ and Grill" /></a><p>Big bites. Bigger attitude.<br />See you at the Shack.</p></div><div className="foot"><b>EXPLORE</b><a href="#story">Our Story</a><a href="#menu">The Menu</a><a href="#vibe">The Vibe</a></div><div className="foot"><b>FIND THE SHACK</b><a href={mapUrl} target="_blank" rel="noreferrer"><MapPin size={14} /> {address}</a><a href={`tel:${phone.replaceAll(' ', '')}`}><Phone size={14} /> {phone}</a><a href={`mailto:${email}`}><Mail size={14} /> {email}</a><span><Clock size={14} /> 3 PM – 6 AM</span></div><div className="foot"><b>FOLLOW US</b><a href="https://www.instagram.com/shack66_/" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><Facebook size={15} /> Facebook</a></div></div><div className="bottom"><span>© 2026 SHACK66. ALL RIGHTS RESERVED.</span><a href="#home">BACK TO TOP ↑</a><span>MADE FOR THE CRAVINGS.</span></div></footer>
  </div>;
}
