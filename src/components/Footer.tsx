"use client";

import { MapPin, Phone, MessageCircle } from "lucide-react";

// Custom Instagram Icon SVG
const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Footer = () => {
  return (
    <footer id="iletisim" style={{ backgroundColor: "var(--accent-bronze)", color: "white", padding: "80px 0 100px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "60px" }}>
          <div>
            <h3 className="serif" style={{ color: "white", fontSize: "24px", marginBottom: "30px" }}>
              Neslim <span style={{ color: "var(--accent-rose)" }}>Güngen</span>
            </h3>
            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "14px", lineHeight: "1.8", marginBottom: "30px" }}>
              Malatya'nın kalbinde, bilimsel yaklaşımlar ve estetik vizyonumuzla 
              kendinizi en iyi hissettirecek dokunuşları sunuyoruz.
            </p>
            <div style={{ display: "flex", gap: "15px" }}>
              <a href="https://www.instagram.com/neslimgungen.malatya/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }} aria-label="Neslim Güngen Malatya Instagram Sayfası"><InstagramIcon size={20} /></a>
              <a href="https://wa.me/905448304434?text=Merhaba%20Neslim%20G%C3%BCngen%20Malatya%2C%20i%C5%9Flemleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." style={{ color: "white" }} aria-label="WhatsApp İletişim"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "18px", color: "white", marginBottom: "30px" }}>İletişim</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
                <MapPin size={20} style={{ color: "var(--accent-rose)", flexShrink: 0 }} />
                <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}>
                  İnönü, İnönü Cd. No:174/C,<br /> 
                  44200 Yeşilyurt/Malatya
                </p>
              </div>
              <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                <Phone size={20} style={{ color: "var(--accent-rose)", flexShrink: 0 }} />
                <a href="tel:05448304434" style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }} aria-label="Telefonla Arayın">0544 830 44 34</a>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "18px", color: "white", marginBottom: "30px" }}>Konum</h4>
            <div 
              className="premium-frame"
              style={{ padding: "0", overflow: "hidden", aspectRatio: "16/9", border: "none" }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.8824810759083!2d38.30752497645069!3d38.35165847184852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407636e08dd10291%3A0xc39f886f7f2d575c!2sMalatya%20Ofis%20Plaza!5e0!3m2!1str!2str!4v1712945000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: "60px", paddingTop: "40px", borderTop: "1px solid rgba(255, 255, 255, 0.1)", textAlign: "center" }}>
          <p style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.5)" }}>
            © 2026 Neslim Güngen Malatya. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
