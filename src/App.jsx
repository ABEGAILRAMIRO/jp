import { useState } from "react";

const NAV = [
  ["About", "about"],
  ["Expertise", "expertise"],
  ["Selected Work", "work"],
  ["Gallery", "gallery"],
  ["Experience", "experience"],
  ["Tools", "tools"],
];

const EXPERTISE = [
  ["Social Media Management", "Content planning, scheduling, publishing, strategy, community management, account monitoring, engagement, and analytics."],
  ["Digital Marketing & Advertising", "Meta Ads, Google Ads support, promotional campaigns, creative testing, competitor and market research, and campaign monitoring."],
  ["Video Editing & Content Production", "Reels, TikToks, short-form ads, product and educational videos, event highlights, captions, and visual storytelling."],
  ["Graphic Design", "Social graphics, digital ads, promotional materials, newsletters, banners, branded content, and marketing layouts."],
  ["E-commerce Support", "Shopify operations, Amazon marketplace management, product listings, promotions, and online store coordination."],
  ["Virtual & Executive Assistance", "Research, calendar management, presentations, communications, reporting, and project and workflow organization."],
  ["Healthcare Virtual Assistance", "Appointment scheduling, client communication, SMS follow-ups, social inquiries, CRM tracking, and lead management."],
  ["WordPress & Content Writing", "Travel blog writing, website content preparation, WordPress publishing, and editorial formatting."],
];

const WORK = [
  ["Social Media", "Social Media Management & Digital Growth", "Managing and supporting social media activities for businesses across healthcare, wellness, consumer products, food and beverage, and professional services.", ["Social media account management", "Content planning and development", "Content scheduling and publishing", "Community engagement"]],
  ["E-commerce", "E-commerce Management & Digital Advertising", "Supporting online stores, product marketing, and advertising activities across multiple e-commerce businesses.", ["Shopify store management", "Amazon marketplace support", "Product listing management", "E-commerce content preparation"]],
  ["Video", "Video Editing & Short-Form Content", "Creating engaging, platform-appropriate videos for businesses, brands, and professional organizations.", ["Instagram Reels", "TikTok videos", "Product advertisements", "Promotional and educational videos"]],
  ["Design", "Graphic Design & Marketing Creatives", "Developing visually consistent marketing materials for businesses across different industries.", ["Social media graphics", "Promotional advertising designs", "Digital marketing banners", "Dental campaign graphics"]],
  ["Healthcare Support", "Healthcare Virtual Assistance & CRM Management", "Supporting healthcare-related business operations through organized client communication, appointment management, and CRM tracking.", ["Social media management", "Client appointment booking", "SMS communication", "Follow-up coordination"]],
  ["Operations", "Executive Assistance, Research & Administrative Support", "Supporting executive operations, research activities, presentations, training, and complex administrative responsibilities.", ["Executive assistance", "Calendar and communication management", "Professional research", "Business presentations and PowerPoint development"]],
  ["Writing", "WordPress Content Writing & Website Support", "Supporting a travel content creator through written blog content and WordPress publishing.", ["Travel blog writing", "Written content development", "WordPress content preparation", "Article formatting"]],
];

const CLIENTS = [
  ["Wayne Fromm / Fromm Works", "Quik Pod and Swirly Heads product lines, including STEM Magic Mixer and Snoopy Magic Mixer. Social media, video editing, creative content, Meta advertising, Google Ads support, and product marketing."],
  ["The Smile Media", "Agency relationship covering creative work for nine dental clinics, the Michigan Dental Association Foundation, and Bites Burger. Dental graphics, short-form video, promotional content, and newsletter layouts."],
  ["Dr. Dean Jones, DC / Wellness Institute", "Social Media Manager, later Medical Virtual Assistant. Client booking, SMS communication, social inquiries, and GoHighLevel lead tracking."],
  ["Rejuvenation and Health", "Social media management and related digital content support."],
  ["Docushield", "Amazon, Shopify, and social media support."],
  ["Travel Content Creator", "WordPress travel content writing and website publishing support."],
  ["Other Previous Clients", "Additional businesses and projects across several industries. The names above are selected examples, not a complete history."],
];

const GALLERY = [
  ["Dental campaign graphic", "Social Media Graphics", 1],
  ["Product reel", "Video Editing", 1.7],
  ["Product ad creative", "Digital Advertising", 0.8],
  ["Newsletter layout", "Newsletters & Print", 1.3],
  ["Shopify product page", "E-commerce", 0.75],
  ["Restaurant promo", "Video Editing", 1.5],
  ["Event graphic", "Social Media Graphics", 1.2],
  ["Amazon listing", "E-commerce", 0.9],
  ["Story design", "Social Media Graphics", 1.78],
  ["Executive presentation", "Other Projects", 0.62],
  ["Dental education video", "Video Editing", 1.1],
  ["Web banner", "Digital Advertising", 0.5],
];

const TOOLS = [
  ["Creative Production", ["Canva", "CapCut Pro", "Gemini", "Hailuo AI"]],
  ["Social Media & Management", ["Meta Business Suite", "Metricool", "Hootsuite", "Later", "Rella"]],
  ["Advertising & Analytics", ["Meta Ads Manager", "Google Ads", "Google Analytics"]],
  ["E-commerce & Email", ["Shopify", "Amazon", "Klaviyo"]],
  ["CRM & Website", ["GoHighLevel", "WordPress"]],
  ["Project Management & Communication", ["Notion", "Slack", "Google Workspace", "Zoom", "Microsoft Office"]],
];

const pad = (n) => String(n + 1).padStart(2, "0");

function Heading({ eyebrow, children, lead }) {
  return (
    <>
      <div className="eyebrow">{eyebrow}</div>
      <h2>{children}</h2>
      {lead && <p className="lead">{lead}</p>}
    </>
  );
}

export default function App() {
  const [filter, setFilter] = useState("All Work");
  const [open, setOpen] = useState(null);
  const cats = ["All Work", ...new Set(GALLERY.map((g) => g[1]))];
  const shown = GALLERY.filter((g) => filter === "All Work" || g[1] === filter);

  return (
    <div className="app" id="top">
      <style>{CSS}</style>

      <nav>
        <div className="wrap navin">
          <a className="logo" href="#top">
            <span className="mono">JP</span>Jomarie D. Portugal
          </a>
          <div className="links">
            {NAV.map(([label, id]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </div>
          <a className="btn p" href="#contact">Let’s Connect</a>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap herogrid">
          <div>
            <span className="pill">6 Years of VA Experience · Multidisciplinary Creative &amp; Digital Support</span>
            <div className="name">JOMARIE D. PORTUGAL</div>
            <h1>Creative Thinking. <em>Strategic</em> Execution. Meaningful Results.</h1>
            <div className="role">Social Media Manager | Digital Marketing Specialist | Video Editor | Virtual Assistant</div>
            <p className="muted">
              I’m Jomarie Portugal, a multidisciplinary digital professional with approximately six years of experience supporting businesses through social media management, creative content, digital marketing, e-commerce operations, and virtual assistance. From building engaging content to managing complex workflows, I bring creativity, strategy, and dependable execution to every project.
            </p>
            <div className="cta">
              <a className="btn p" href="#work">Explore My Work</a>
              <a className="btn o" href="#contact">Let’s Connect</a>
            </div>
          </div>
          {/* Palitan ng actual photo: <img src="/portrait.png" alt="Jomarie Portugal" /> */}
          <div className="portrait" role="img" aria-label="Portrait placeholder">JP</div>
        </div>
      </header>

      <section id="about" className="alt">
        <div className="wrap aboutgrid">
          <div>
            <Heading eyebrow="About">A Creative Mind with a <em>Strategic</em> Approach</Heading>
            <p className="muted">My work spans social media, digital advertising, video editing, graphic design, e-commerce operations, executive assistance, healthcare administration, and content writing.</p>
            <p className="muted">I have supported product brands and online stores, healthcare practices, dental marketing operations, wellness companies, and content creators. My approach combines creativity with organization, research, and practical execution.</p>
            <p className="muted">Having worked on both creative production and administrative support, I understand what it takes to deliver work that looks good, serves a purpose, and is managed with care.</p>
          </div>
          <div className="stats">
            {[["6 Years", "Virtual Assistant Experience"], ["Multi-Industry", "Professional Experience"], ["Creative + Operational", "Expertise"]].map(([b, s]) => (
              <div className="stat" key={b}><b>{b}</b><span>{s}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise">
        <div className="wrap">
          <Heading eyebrow="Expertise" lead="Eight areas of practice, often combined within a single engagement.">What I Bring to a Team</Heading>
          <div className="grid">
            {EXPERTISE.map(([t, d], i) => (
              <div className="card" key={t}>
                <div className="num">{pad(i)}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="alt">
        <div className="wrap">
          <Heading eyebrow="Selected Work" lead="Projects and professional work across social media, digital marketing, creative production, e-commerce, healthcare support, and executive operations. Each represents work completed across multiple clients and industries.">
            Selected Work &amp; Professional Projects
          </Heading>
          <div className="work">
            {WORK.map(([tag, title, desc, items], i) => (
              <article className="wk" key={title}>
                <div className="thumbs"><i /><i /><i /></div>
                <div className="in">
                  <div className="tag">{pad(i)} · {tag}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <ul>{items.map((x) => <li key={x}>{x}</li>)}</ul>
                  <span className="more">View case study →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="clients">
        <div className="wrap">
          <Heading eyebrow="Client Experience" lead="A selection of engagements. Many other clients and projects are part of my history.">
            Industries &amp; Brands I’ve Supported
          </Heading>
          <div className="clients">
            {CLIENTS.map(([n, d]) => (
              <div className="cl" key={n}><h3>{n}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="alt">
        <div className="wrap">
          <Heading eyebrow="Creative Gallery" lead="Graphics, videos, ads, and layouts in their original proportions. Select any piece to view it in full.">
            Browse the Work
          </Heading>
          <div className="filters">
            {cats.map((c) => (
              <button key={c} className={c === filter ? "on" : ""} onClick={() => setFilter(c)}>{c}</button>
            ))}
          </div>
          <div className="gal">
            {shown.map((g) => (
              <button className="g" key={g[0]} onClick={() => setOpen(g)}>
                <div className="ph" style={{ aspectRatio: `1 / ${g[2]}` }} />
                <div className="cap">{g[0]}<small>{g[1]}</small></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="wrap expgrid">
          <div>
            <Heading eyebrow="Background">Experience &amp; Education</Heading>
            <div className="big">6</div>
            <p className="muted" style={{ margin: "6px 0 0" }}>Years as a Virtual Assistant, through 2026</p>
            <ul className="muted">
              {["Social media and digital marketing", "Creative production", "E-commerce", "Healthcare support", "Executive assistance", "Administrative operations", "Research and project coordination"].map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ marginTop: 8 }}>Education</div>
            <div className="edu"><span>2015</span><h3>Master of Public Administration</h3><p>Core Gateway College</p><p>Focus: Human Resources Management and Non-Profit Management</p></div>
            <div className="edu"><span>2014</span><h3>Bachelor of Arts in Social Sciences</h3><p>Central Luzon State University</p><p>Major: Political Science · Minor: Sociology</p></div>
          </div>
        </div>
      </section>

      <section id="tools" className="alt">
        <div className="wrap">
          <Heading eyebrow="Tools">Tools &amp; Platforms</Heading>
          <div className="tools">
            {TOOLS.map(([t, list]) => (
              <div className="card" key={t}>
                <h3>{t}</h3>
                <div className="chips">{list.map((x) => <span key={x}>{x}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="wrap">
          <Heading eyebrow="Contact" lead="Whether you need support with social media management, creative content, digital marketing, e-commerce, or business operations, I’d love to learn more about your project.">
            Have a Project in Mind? <em>Let’s Work Together.</em>
          </Heading>
          <div className="cta center">
            <a className="btn p" href="mailto:jomariedportugal@gmail.com">jomariedportugal@gmail.com</a>
            <a className="btn o" href="https://www.linkedin.com/in/jomarie-portugal-5b9b10308/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot">
          <span>© 2026 Jomarie D. Portugal</span>
          <span>Social Media · Digital Marketing · Video · Virtual Assistance</span>
        </div>
      </footer>

      {open && (
        <div className="lb" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <div className="lbbox" onClick={(e) => e.stopPropagation()}>
            <div className="ph" style={{ aspectRatio: "4 / 3", borderRadius: 12, marginBottom: 16 }} />
            <h3>{open[0]}</h3>
            <p className="muted" style={{ margin: "6px 0 16px" }}>{open[1]}</p>
            <button className="btn o" onClick={() => setOpen(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap');
.app{--bg:#ffffff;--bg2:#fdf4f2;--ink:#2d2224;--mut:#6f6063;--acc:#c4566b;--acc2:#eeb3bd;--line:#f1e0dd;
--serif:'Cormorant Garamond',Georgia,'Times New Roman',serif;--sans:'Inter',system-ui,-apple-system,'Segoe UI',sans-serif;
background:var(--bg);color:var(--ink);font:400 16px/1.7 var(--sans);-webkit-font-smoothing:antialiased;min-height:100vh}
.app *{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:76px}
.app a{color:inherit;text-decoration:none}
.app h1,.app h2,.app h3{font-family:var(--serif);font-weight:500;line-height:1.12;margin:0}
.app em{color:var(--acc);font-style:italic}
.wrap{max-width:1120px;margin:0 auto;padding:0 24px}
.app section{padding:88px 0}
.alt{background:var(--bg2)}
.muted{color:var(--mut)}
.eyebrow{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--acc);font-weight:600;margin-bottom:14px}
.app h2{font-size:clamp(32px,5vw,48px);margin-bottom:18px}
.lead{color:var(--mut);max-width:640px;margin:0 0 44px}
.contact{text-align:center}.contact .lead{margin-inline:auto}
nav{position:sticky;top:0;z-index:20;background:rgba(255,255,255,.92);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.navin{display:flex;align-items:center;justify-content:space-between;height:68px;gap:16px}
.logo{display:flex;align-items:center;gap:10px;font-family:var(--serif);font-size:20px;font-weight:600;white-space:nowrap}
.mono{width:36px;height:36px;border-radius:50%;background:var(--acc);color:#fff;display:grid;place-items:center;font:600 14px var(--sans)}
.links{display:flex;gap:22px;font-size:14px;color:var(--mut)}
.links a:hover{color:var(--acc)}
.btn{display:inline-block;padding:12px 24px;border-radius:999px;font:500 14px var(--sans);border:1px solid var(--acc);background:transparent;cursor:pointer;transition:.2s;white-space:nowrap}
.btn.p{background:var(--acc);color:#fff}.btn.p:hover{opacity:.88}
.btn.o{color:var(--acc)}.btn.o:hover{background:var(--acc);color:#fff}
.hero{padding:72px 0 88px}
.herogrid{display:grid;grid-template-columns:1.15fr .85fr;gap:56px;align-items:center}
.pill{display:inline-block;padding:7px 16px;border:1px solid var(--line);border-radius:999px;font-size:13px;color:var(--mut);margin-bottom:22px}
.name{font-size:13px;letter-spacing:.22em;color:var(--mut);margin-bottom:10px}
.app h1{font-size:clamp(40px,6.4vw,72px);margin-bottom:20px}
.role{font-weight:500;margin-bottom:16px}
.hero p{max-width:560px}
.cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px}.cta.center{justify-content:center}
.portrait{aspect-ratio:4/5;border-radius:200px 200px 24px 24px;background:linear-gradient(160deg,var(--acc2),var(--bg2));display:grid;place-items:center;font:500 96px var(--serif);color:var(--acc);border:1px solid var(--line)}
.aboutgrid{display:grid;grid-template-columns:1.3fr 1fr;gap:56px}
.aboutgrid p{margin:0 0 16px}
.stats{display:grid;gap:14px;align-content:start}
.stat{background:#fff;border:1px solid var(--line);border-radius:16px;padding:20px 24px}
.stat b{display:block;font:500 28px var(--serif);color:var(--acc)}
.stat span{font-size:14px;color:var(--mut)}
.grid{display:grid;gap:20px;grid-template-columns:repeat(auto-fill,minmax(250px,1fr))}
.card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:28px;transition:.2s}
.card:hover{border-color:var(--acc2)}
.num{font:500 30px var(--serif);color:var(--acc2);margin-bottom:6px}
.card h3{font-size:23px;margin-bottom:10px}
.card p{color:var(--mut);font-size:15px;margin:0}
.work{display:grid;gap:24px;grid-template-columns:repeat(auto-fill,minmax(320px,1fr))}
.wk{background:#fff;border:1px solid var(--line);border-radius:20px;overflow:hidden;display:flex;flex-direction:column}
.thumbs{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:var(--line)}
.thumbs i{aspect-ratio:1;background:linear-gradient(135deg,var(--bg2),var(--acc2))}
.wk .in{padding:24px;display:flex;flex-direction:column;gap:10px;flex:1}
.tag{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--acc);font-weight:600}
.wk h3{font-size:24px}.wk p{margin:0;color:var(--mut);font-size:15px}
.wk ul{margin:0;padding-left:18px;color:var(--mut);font-size:14px}
.more{margin-top:auto;color:var(--acc);font-weight:500;font-size:14px}
.clients{border-top:1px solid var(--line)}
.cl{display:grid;grid-template-columns:1fr 2fr;gap:32px;padding:26px 0;border-bottom:1px solid var(--line)}
.cl h3{font-size:24px}.cl p{margin:0;color:var(--mut)}
.filters{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px}
.filters button{font:400 13px var(--sans);padding:8px 16px;border-radius:999px;border:1px solid var(--line);background:#fff;color:var(--mut);cursor:pointer}
.filters button.on,.filters button:hover{background:var(--acc);color:#fff;border-color:var(--acc)}
.gal{columns:3 220px;column-gap:16px}
.g{display:block;width:100%;text-align:left;font:inherit;color:inherit;break-inside:avoid;margin-bottom:16px;border-radius:14px;overflow:hidden;border:1px solid var(--line);background:#fff;cursor:pointer;padding:0}
.ph{background:linear-gradient(135deg,var(--bg2),var(--acc2))}
.cap{padding:12px 14px;font-size:14px}.g small{display:block;color:var(--mut);font-size:12px}
.expgrid{display:grid;grid-template-columns:1fr 1.3fr;gap:56px}
.big{font:500 96px/1 var(--serif);color:var(--acc)}
.expgrid ul{padding-left:18px;margin:16px 0 0}
.edu{border-left:2px solid var(--acc2);padding:0 0 28px 22px}
.edu span{color:var(--acc);font-weight:600;font-size:14px}.edu h3{font-size:24px;margin:2px 0}.edu p{margin:0;color:var(--mut);font-size:14px}
.tools{display:grid;gap:20px;grid-template-columns:repeat(auto-fill,minmax(230px,1fr))}
.tools h3{font-size:20px;margin-bottom:12px}
.chips{display:flex;flex-wrap:wrap;gap:8px}
.chips span{font-size:13px;padding:5px 12px;border-radius:999px;background:var(--bg2);border:1px solid var(--line)}
footer{padding:32px 0;border-top:1px solid var(--line);color:var(--mut);font-size:13px}
.foot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px}
.lb{position:fixed;inset:0;background:rgba(30,15,18,.55);display:grid;place-items:center;z-index:40;padding:24px}
.lbbox{background:#fff;border-radius:18px;padding:28px;max-width:420px;width:100%;text-align:center}
.lbbox h3{font-size:24px}
.app :focus-visible{outline:2px solid var(--acc);outline-offset:2px}
@media(max-width:820px){.herogrid,.aboutgrid,.expgrid,.cl{grid-template-columns:1fr}.links{display:none}.portrait{max-width:320px;font-size:72px}.app section{padding:64px 0}}
`;