import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "#07111f",
        color: "white",
        marginTop: "0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "56px 40px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 0.8fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* COLONNA 1 */}
          <div>
            <Link
              href="/"
              style={{
                fontSize: "52px",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                textDecoration: "none",
                color: "white",
                display: "inline-block",
              }}
            >
              <span className="martens-shine">MartensLab</span>
            </Link>

            <p
              style={{
                marginTop: "18px",
                maxWidth: "560px",
                fontSize: "18px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.68)",
              }}
            >
              Studio web indipendente per siti moderni, chiari e credibili.
              Progetti su misura, restyling, supporto tecnico e manutenzione WordPress.
            </p>
          </div>

          {/* COLONNA 2 */}
          <div>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.48)",
                marginBottom: "18px",
              }}
            >
              Navigazione
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                fontSize: "18px",
              }}
            >
              <Link href="/" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "none" }}>
                Home
              </Link>
              <Link href="/progetti" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "none" }}>
                Progetti
              </Link>
              <Link href="/chi-sono" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "none" }}>
                Chi sono
              </Link>
              <Link href="/contatti" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "none" }}>
                Contatti
              </Link>
            </div>
          </div>

          {/* COLONNA 3 */}
          <div>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.48)",
                marginBottom: "18px",
              }}
            >
              Contatti
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                fontSize: "18px",
              }}
            >
              <a
                href="mailto:contatti@martenslab.com"
                style={{ color: "rgba(255,255,255,0.78)", textDecoration: "none" }}
              >
                contatti@martenslab.com
              </a>

              <a
                href="mailto:lorenzo@martenslab.com"
                style={{ color: "rgba(255,255,255,0.78)", textDecoration: "none" }}
              >
                lorenzo@martenslab.com
              </a>

              <p
                style={{
                  paddingTop: "4px",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Siti vetrina · Restyling · Landing page · WordPress
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          style={{
            marginTop: "40px",
            paddingTop: "18px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            fontSize: "14px",
            color: "rgba(255,255,255,0.48)",
          }}
        >
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} MartensLab. Tutti i diritti riservati.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <Link href="/contatti" style={{ color: "rgba(255,255,255,0.72)", textDecoration: "none" }}>
              Contatti
            </Link>
            <Link href="/chi-sono" style={{ color: "rgba(255,255,255,0.72)", textDecoration: "none" }}>
              Chi sono
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}