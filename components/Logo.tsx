/**
 * Simplified recreation of the BH logomark as inline SVG so the page works out of the box.
 * To use your exact logo file instead: drop it in /public (e.g. logo-mark.svg) and swap
 * the <svg> below for <Image src="/logo-mark.svg" ... />.
 */
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={(size * 120) / 100}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Gold "B/D" body with a square counter */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#F2C879"
        d="M0 0H52C70 0 80 11 80 28V92C80 109 70 120 52 120H0V0ZM26 26H52V94H26V26Z"
      />
      {/* White H: right stem + crossbar */}
      <rect x="66" y="0" width="34" height="120" rx="0" fill="#FFFFFF" />
      <rect x="36" y="48" width="40" height="24" fill="#FFFFFF" />
      {/* tiny dark gap between gold and white stem */}
      <rect x="62" y="0" width="4" height="120" fill="#0D0C0A" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="logo">
      <LogoMark size={22} />
      <span className="logo-text" style={{ color: light ? "#fff" : undefined }}>
        <span>Benstanthub</span>
        <span>Ventures</span>
      </span>
    </span>
  );
}
