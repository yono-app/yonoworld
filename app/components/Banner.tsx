import Image from "next/image";

const TELEGRAM_LINK = "https://t.me/+xiZV9WhjGl05OWU9";
const TELEGRAM_DISPLAY = "https://t.me/+xiZV9WhjGl05OWU9";
const SITE_URL = "yonoworld.xyz";
const SITE_NAME = "Yono World";

export default function Banner() {
  return (
    <div
      style={{
        background: "#fff",
        borderBottom: "1px solid #E5E5EA",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "20px 16px 18px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>

          {/* Logo */}
          <div
            style={{
              flexShrink: 0,
              width: 72,
              height: 72,
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
              position: "relative",
            }}
          >
            <Image
              src="/logo.jpeg"
              alt={SITE_NAME}
              fill
              style={{ objectFit: "cover" }}
              sizes="72px"
              priority
            />
          </div>

          {/* Text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <h1
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#1D1D1F",
                margin: 0,
                lineHeight: 1.2,
                letterSpacing: "-0.3px",
              }}
            >
              {SITE_NAME}
            </h1>
            <p
              style={{
                fontSize: 12,
                color: "#6E6E73",
                margin: "2px 0 8px",
                fontWeight: 400,
              }}
            >
              {SITE_URL}
            </p>

            {/* Chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {[
                { icon: "🎁", label: "₹300 Signup Bonus" },
                { icon: "💳", label: "Min ₹100 Withdraw" },
                { icon: "📲", label: "15+ Top Apps" },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    background: "#F2F2F7",
                    color: "#3A3A3C",
                    fontSize: 11,
                    fontWeight: 500,
                    padding: "4px 10px",
                    borderRadius: 20,
                  }}
                >
                  {icon} {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Telegram row */}
        <div
          style={{
            marginTop: 14,
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#F2F2F7",
            borderRadius: 12,
            padding: "10px 14px",
          }}
        >
          <svg width="16" height="16" fill="#0071E3" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12.002 12.002 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          <span style={{ fontSize: 12, color: "#6E6E73", fontWeight: 400, flexShrink: 0 }}>
            Join our Telegram
          </span>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 12,
              color: "#0071E3",
              fontWeight: 500,
              textDecoration: "none",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              minWidth: 0,
            }}
          >
            {TELEGRAM_DISPLAY}
          </a>
        </div>
      </div>
    </div>
  );
}