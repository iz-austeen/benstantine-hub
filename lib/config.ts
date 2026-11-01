// ─────────────────────────────────────────────────────────────
// Edit these values. Everything on the site reads from here.
// ─────────────────────────────────────────────────────────────

export const BRAND = {
  name: "Benstanthub Ventures",
  short: "Benstanthub",
  tagline: "Errands, handled.",
};

// WhatsApp number in international format, digits only (no +, spaces or dashes).
// e.g. Nigeria: 2348012345678
// You can also set NEXT_PUBLIC_WHATSAPP_NUMBER in Vercel → Project Settings → Environment Variables.
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2340000000000";

export const CONTACT = {
  email: "hello@benstanthub.com", // placeholder, change it
  instagram: "https://instagram.com/", // placeholder, change it
  x: "https://x.com/", // placeholder, change it
};

/** Build a wa.me link with a prefilled message. */
export function waLink(message = "Hi Benstanthub, I need help with an errand."): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const MESSAGES = {
  general: "Hi Benstanthub, I need help with an errand.",
  airport: "Hi Benstanthub, I need someone to pick up my package and take it to the airport.",
  courier: "Hi Benstanthub, I need someone to drop off my package at a dispatch or courier service.",
  buy: "Hi Benstanthub, I need someone to buy something for me.",
  service: "Hi Benstanthub, I need someone to help me with a service or task.",
};
