import type { NavbarProps } from '$lib/types/typeProps';

export const navbarData: NavbarProps = {
  logo: { src: "/FreederationLogo.svg", alt: "Freederation Logo" },
  links: [
    { href: "https://freederation.github.io/intro.html", text: "GitBook", icon: "/icons/gitbook-icon.svg" },
    { href: "https://substack.com/@freederationprotocol", text: "Blogs", icon: "/icons/substack-icon.svg" },
    { href: "http://app.freederation.com", text: "App", className: "button-app" }
  ]
};
