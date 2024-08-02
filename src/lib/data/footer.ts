import type { FooterProps } from '$lib/types/typeProps';

export const footerData: FooterProps = {
  ctaTitle: "Join Us Today",
  ctaText: "Become part of a collaborative and interoperable economy.",
  quickLinks: [
    { text: "Collaborative Economy", href: "#section1" },
    { text: "SaaS Problem", href: "#problem-to-solve" },
    { text: "How It Works", href: "#how_it_works" },
    { text: "About Us", href: "#about_freederation" },
    { text: "FAQ", href: "#faq" }
  ],
  socialLinks: [
    { src: "icons/twitter-icon.svg", alt: "Twitter", href: "#" },
    { src: "icons/linkedin-icon.svg", alt: "LinkedIn", href: "#" },
    { src: "icons/github-icon.svg", alt: "GitHub", href: "#" },
    { src: "icons/substack-icon.svg", alt: "Substack", href: "#" }
  ],
  contactEmail: "info@freederation.com"
};
