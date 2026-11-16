import Link from "next/link";
import { FaInstagram, FaFacebook,  FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer id="footer" className="bg-[#2A1206] text-[#E8D5B5] px-8 py-7 border-t border-[rgba(196,98,29,0.15)]">
      <div className="mx-auto grid max-w-300 gap-12 grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <h4 className="text-2xl font-serif font-bold text-[#F5ECD7] mb-4">
            GE<span className="text-[#c4621d]">LA</span>
          </h4>
          <p className="text-sm opacity-60 leading-7 max-w-70">
            A new life for Georgian flavour. Traditional ingredients, modern vision. Come taste the difference.
          </p>
          <div className="mt-6 flex gap-4">
            {[
              { href: "https://instagram.com", label: "Instagram", icon: <FaInstagram /> },
              { href: "https://facebook.com", label: "Facebook", icon: <FaFacebook /> },
              { href: "https://twitter.com", label: "Twitter / X", icon: <FaXTwitter /> },
              { href: "https://linkedin.com", label: "LinkedIn", icon: <FaLinkedin /> },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[rgba(232,213,181,0.15)] flex items-center justify-center text-[#E8D5B5] transition-all duration-300 hover:border-[#C4621D] hover:text-[#C4621D] hover:-translate-y-0.5"
                aria-label={item.label}
              >
                {item.icon}
                <span className="sr-only">{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-[10.5px] uppercase tracking-[2.5px] text-[#C4621D] font-bold mb-16px">Navigate</h5>
          <Link href="/" className="text-sm opacity-70 leading-8 block transition-opacity duration-300 hover:opacity-100 hover:text-[#E8874A]">
            Home
          </Link>
          <Link href="/menu" className="text-sm opacity-70 leading-8 block transition-opacity duration-300 hover:opacity-100 hover:text-[#E8874A]">
            Full Menu
          </Link>
          <Link href="/about" className="text-sm opacity-70 leading-8 block transition-opacity duration-300 hover:opacity-100 hover:text-[#E8874A]">
            About Us
          </Link>
        </div>

        <div>
          <h5 className="text-[10.5px] uppercase tracking-[2.5px] text-[#C4621D] font-bold mb-4">Visit Us</h5>
          <p className="text-sm opacity-70 leading-8">Tbilisi, Georgia</p>
          <p className="text-sm opacity-70 leading-8">Rustaveli Avenue 14</p>
          <p className="text-sm opacity-70 leading-8">Mon – Sat · 12:00–23:00</p>
        </div>

        <div>
          <h5 className="text-[10.5px] uppercase tracking-[2.5px] text-[#C4621D] font-bold mb-4">Connect</h5>
          <p className="text-sm opacity-70 leading-8">+995 598 71 70 04</p>
          <a
            href="mailto:hello@example.ge"
            className="text-sm opacity-70 leading-8 block transition-opacity duration-300 hover:opacity-100 hover:text-[#E8874A]"
          >
            hello@example.ge
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-300 border-t border-[rgba(232,213,181,0.06)] pt-6 text-center text-[10px] uppercase tracking-[3px] opacity-30">
        © 2026 RESTAURANT — Made by  {" "}
        <a
          className="text-[#FFA15E] no-underline font-bold hover:text-[#8B3E0F] transition-colors"
          href="https://github.com/sandreqsa-d"
          target="_blank"
          rel="noopener noreferrer"
        >
          sandro
        </a>
      </div>
    </footer>
  );
}
