import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/schedule", label: "Schedule" },
    { href: "/retreats", label: "Retreats" },
    { href: "/contact", label: "Contact" },
  ],
  contact: {
    email: "hello@yogastudio.com",
    phone: "+1 (555) 123-4567",
    address: "123 Serenity Lane, Peaceful City",
  },
  social: [
    { href: "https://instagram.com", label: "Instagram" },
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://youtube.com", label: "YouTube" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--background-dark)] border-t border-[var(--primary-gold)]/20 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Yoga Studio"
                width={64}
                height={64}
                className="rounded-full"
              />
            </Link>
            <p className="text-[var(--text-cream)]/70 text-sm leading-relaxed">
              Discover inner peace and physical wellness through our guided yoga practice.
              Join our community and transform your life.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="subheading text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-cream)]/70 hover:text-[var(--primary-gold)] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="subheading text-sm mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-[var(--text-cream)]/70">
              <li>
                <a
                  href={`mailto:${footerLinks.contact.email}`}
                  className="hover:text-[var(--primary-gold)] transition-colors duration-300"
                >
                  {footerLinks.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footerLinks.contact.phone}`}
                  className="hover:text-[var(--primary-gold)] transition-colors duration-300"
                >
                  {footerLinks.contact.phone}
                </a>
              </li>
              <li>{footerLinks.contact.address}</li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-cream)]/70 hover:text-[var(--primary-gold)] transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--primary-gold)]/20 pt-8 text-center">
          <p className="text-[var(--text-cream)]/50 text-sm">
            &copy; {new Date().getFullYear()} Yoga Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
