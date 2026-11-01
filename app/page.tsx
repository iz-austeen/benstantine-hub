import { Logo, LogoMark } from "@/components/Logo";
import { CONTACT, MESSAGES, waLink } from "@/lib/config";

/* ───────────── tiny inline icons ───────────── */
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Icon = {
  box: (
    <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
      <path d="M21 8l-9-5-9 5 9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  ),
  plane: (
    <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
      <path d="M10.5 13.5L3 11l1.5-1.5 9 .5 4-4a1.8 1.8 0 012.5 2.5l-4 4 .5 9L19 23l-2.5-7.5" transform="translate(-1 -3)" />
    </svg>
  ),
  truck: (
    <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
      <path d="M2 6h11v10H2z" />
      <path d="M13 9h4l4 4v3h-8z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  ),
  bag: (
    <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
      <path d="M5 8h14l-1 12H6L5 8z" />
      <path d="M9 8V6a3 3 0 016 0v2" />
    </svg>
  ),
  tool: (
    <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
      <path d="M14.5 6.5a4 4 0 00-5 5L3 18l3 3 6.5-6.5a4 4 0 005-5l-2.5 2.5-2-2 2.5-2.5z" />
    </svg>
  ),
  chat: (
    <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
      <path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-5.4A8 8 0 1121 12z" />
    </svg>
  ),
  check: (
    <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.7 2.7L16 9.5" />
    </svg>
  ),
  arrow: (
    <svg width="16" height="16" viewBox="0 0 24 24" {...stroke}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  wa: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.9 9.9 0 00-8.5 14.9L2 22l5.25-1.5A9.9 9.9 0 1012.04 2zm0 1.8a8.1 8.1 0 11-4.2 15l-.3-.18-3.1.89.9-3-.2-.32A8.1 8.1 0 0112.04 3.8zM8.7 7.6c-.2 0-.5.07-.7.35-.25.28-.95.93-.95 2.27s.98 2.63 1.1 2.8c.14.18 1.9 3 4.7 4.1 2.3.9 2.8.72 3.3.68.5-.05 1.6-.65 1.8-1.3.23-.63.23-1.18.16-1.3-.07-.1-.25-.18-.52-.32-.28-.14-1.6-.8-1.85-.88-.25-.1-.43-.14-.6.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.6.07-.27-.14-1.15-.42-2.2-1.35-.8-.72-1.36-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.14-.16.18-.27.27-.45.1-.18.05-.34-.02-.48-.07-.14-.6-1.5-.84-2.04-.2-.5-.43-.43-.6-.44h-.5z" />
    </svg>
  ),
};

/* ───────────── data ───────────── */
const highlights = [
  { tag: "Simple", big: "1 chat", title: "is all it takes.", note: "Tell us what you need on WhatsApp. We take it from there." },
  { tag: "Reliable", big: "Real people", title: "on every errand.", note: "A person handles your task, not a form or a queue." },
  { tag: "Transparent", big: "Clear", title: "updates and pricing.", note: "You know the plan and the cost before anything moves." },
];

const steps = [
  { n: "01", title: "Message us", body: "Tap the button and tell us what needs to move, buy, or get done. Photos and addresses welcome." },
  { n: "02", title: "We arrange it", body: "We confirm the details, agree the cost with you, and assign the right person for the job." },
  { n: "03", title: "It gets done", body: "Your item is picked up, dropped off, bought or sorted, with updates sent to you in the same chat." },
];

const services = [
  { icon: Icon.box, title: "Package pickups", body: "We collect your goods from wherever they are, home, office, market or a friend's place." },
  { icon: Icon.plane, title: "Airport drop-offs", body: "Need something to reach a traveller? We get it to the airport in time." },
  { icon: Icon.truck, title: "Dispatch & courier runs", body: "We take your parcels to a dispatch rider or courier service so they ship properly." },
  { icon: Icon.bag, title: "Buy-for-me errands", body: "Tell us what you need and where it's sold. We buy it and bring it to you." },
  { icon: Icon.tool, title: "Service requests", body: "Need someone to help with a task or service? We find the right hands to do it." },
];

const errands = [
  { icon: Icon.plane, title: "Airport runs.", body: "Pickup a package and make sure it reaches the airport before the traveller does.", cta: "Book an airport run", msg: MESSAGES.airport },
  { icon: Icon.truck, title: "Courier & dispatch drop-offs.", body: "Skip the queue. We deliver your parcels to the courier or dispatch of your choice.", cta: "Send something out", msg: MESSAGES.courier },
  { icon: Icon.bag, title: "Buy-for-me.", body: "From market runs to specific items, we shop so you don't have to leave your day.", cta: "Ask us to buy", msg: MESSAGES.buy },
];

const faqs = [
  { q: "How do I place a request?", a: "Tap any Chat on WhatsApp button. It opens a conversation with us where you tell us what you need, where it is, and where it should go." },
  { q: "What kind of errands can you handle?", a: "Package pickups, airport and courier drop-offs, buying items for you, and general service requests. If you're not sure we can do it, just ask." },
  { q: "How does pricing work?", a: "We agree the cost with you in the chat before anything moves, so there are no surprises." },
  { q: "Can you take items to the airport for someone travelling?", a: "Yes. Share the item, the traveller's flight timing and the meeting point, and we'll arrange a safe handover." },
  { q: "Do you buy things for me?", a: "Yes. Tell us what you want, where to get it and your budget. We'll confirm details and send updates as we shop." },
  { q: "Will I get updates?", a: "Yes. We keep you posted in the same WhatsApp chat from pickup to delivery." },
  { q: "How fast can you start?", a: "Often the same day, depending on the errand and your location. Message us and we'll tell you straight away." },
];

/* ───────────── page ───────────── */
export default function Home() {
  return (
    <div className="frame">
      <div className="shell">
        {/* NAV */}
        <header className="nav">
          <nav className="nav-links" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="nav-logo" href="#top" aria-label="Benstanthub Ventures home">
            <Logo />
          </a>
          <div className="nav-cta">
            <a className="btn btn-dark btn-sm" href={waLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </header>

        {/* HERO */}
        <section id="top" className="hero">
          <p className="eyebrow">Errands &amp; delivery assistance</p>
          <h1>
            Send the task.
            <br />
            We&apos;ll get it done.
          </h1>
          <p className="lead">
            Package pickups, airport and courier drop-offs, and buy-for-me errands, all arranged in one WhatsApp chat.
          </p>
          <div className="hero-actions">
            <a className="btn btn-dark" href={waLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer">
              {Icon.wa} Start on WhatsApp
            </a>
            <a className="btn btn-ghost" href="#how">
              See how it works
            </a>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hv-watermark">
              <LogoMark size={340} />
            </div>
            <div className="route">
              <div className="node">
                <span className="node-ic">{Icon.box}</span>
                <b>Pickup</b>
                <small>From your home, shop or office</small>
              </div>
              <span className="link" />
              <div className="node node-gold">
                <span className="node-ic">{Icon.chat}</span>
                <b>We arrange it</b>
                <small>Confirmed on WhatsApp</small>
              </div>
              <span className="link" />
              <div className="node">
                <span className="node-ic">{Icon.plane}</span>
                <b>Airport · Courier · You</b>
                <small>Delivered, with updates</small>
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="band">
          <h2 className="h2">Made for busy people.</h2>
          <p className="sub">Hand us the legwork and get your time back.</p>
          <div className="cards3">
            {highlights.map((h) => (
              <article className="stat" key={h.tag}>
                <span className="pill">{h.tag}</span>
                <div>
                  <p className="stat-big">{h.big}</p>
                  <p className="stat-title">{h.title}</p>
                  <p className="stat-note">{h.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* STATEMENT */}
        <section className="statement">
          <p>
            We handle the errands you don&apos;t have time for. We can{" "}
            <a className="hl" href={waLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer">
              pick up your package
            </a>{" "}
            from wherever it is, and take it to{" "}
            <a className="ul" href={waLink(MESSAGES.airport)} target="_blank" rel="noopener noreferrer">
              the airport
            </a>
            , a dispatch rider or a courier service. Need something bought? We&apos;ll{" "}
            <a className="hl" href={waLink(MESSAGES.buy)} target="_blank" rel="noopener noreferrer">
              shop for you
            </a>{" "}
            and bring it over. Everything is arranged by chat, with clear updates until it&apos;s{" "}
            <a className="ul" href={waLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer">
              done
            </a>
            .
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="band">
          <h2 className="h2">How it works.</h2>
          <p className="sub">From message to done in three simple steps.</p>

          <div className="how">
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.n}>
                  <span className="step-n">{s.n}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="chat" aria-hidden="true">
              <div className="chat-head">
                <LogoMark size={16} />
                <div>
                  <b>Benstanthub Ventures</b>
                  <small>online</small>
                </div>
              </div>
              <div className="chat-body">
                <p className="bubble me">Hi, I need a package picked up and dropped at the airport today.</p>
                <p className="bubble them">Sure! Where is it, and what time is the flight?</p>
                <p className="bubble me">Pickup at my office, flight is 6pm.</p>
                <p className="bubble them">Got it. We&apos;ll confirm the cost and send you who&apos;s on it. 👍</p>
                <p className="bubble them tick">Picked up and on the way ✓✓</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="band split">
          <div>
            <h2 className="h2 left">One chat. Every kind of errand.</h2>
            <ul className="feat">
              {services.map((s) => (
                <li key={s.title}>
                  <span className="feat-ic">{s.icon}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="showcase" aria-hidden="true">
            <div className="sc-mark">
              <LogoMark size={120} />
            </div>
            <div className="sc-chip c1">Pickup confirmed</div>
            <div className="sc-chip c2">On the way to airport</div>
            <div className="sc-chip c3">Delivered ✓</div>
          </div>
        </section>

        {/* POPULAR ERRANDS */}
        <section className="band">
          <h2 className="h2">Popular errands.</h2>
          <p className="sub">Pick one to start a chat with the details already filled in.</p>
          <div className="cards3 news">
            {errands.map((e) => (
              <article className="ecard" key={e.title}>
                <div className="ecard-top">
                  <span className="ecard-ic">{e.icon}</span>
                </div>
                <div className="ecard-body">
                  <h3>{e.title}</h3>
                  <p>{e.body}</p>
                  <a className="textlink" href={waLink(e.msg)} target="_blank" rel="noopener noreferrer">
                    {e.cta} {Icon.arrow}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="band faq-wrap">
          <div className="faq-head">
            <h2 className="h2 left">
              Frequently
              <br />
              Asked
              <br />
              Questions.
            </h2>
            <p className="faq-help">
              Didn&apos;t find an answer?{" "}
              <a href={waLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer">
                Message us
              </a>
              , we&apos;ll be happy to help.
            </p>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="cta-wrap">
          <div className="cta">
            <div className="cta-mark">
              <LogoMark size={260} />
            </div>
            <h2>Got something to move, buy or sort? Let&apos;s handle it.</h2>
            <a className="btn btn-gold" href={waLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer">
              {Icon.wa} Chat on WhatsApp
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="f-brand">
            <Logo />
            <p>Errands, handled.</p>
          </div>
          <div className="f-cols">
            <div>
              <b>Explore</b>
              <a href="#services">Services</a>
              <a href="#how">How it works</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <b>Contact</b>
              <a href={waLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href={`mailto:${CONTACT.email}`}>Email</a>
            </div>
            <div>
              <b>Social</b>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={CONTACT.x} target="_blank" rel="noopener noreferrer">X</a>
            </div>
          </div>
          <p className="copy">© {new Date().getFullYear()} Benstanthub Ventures. All rights reserved.</p>
        </footer>
      </div>

      {/* Floating WhatsApp button (mobile-friendly) */}
      <a
        className="fab"
        href={waLink(MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        {Icon.wa}
        <span>Chat with us</span>
      </a>
    </div>
  );
}
