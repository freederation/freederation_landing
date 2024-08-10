import type { HeroSectionProps } from '$lib/types/typeProps';

export const heroSectionData: HeroSectionProps = {
  title: { text: "Revolutionizing the Digital", highlightedText: "Economy" },
  subtitle: {
    text: `FREEDERATION is pioneering a new era where prestige is the currency of the web3. By leveraging a collaborative and decentralized approach, we transform Open Source projects into resilient networks of knowledge, creating expansive opportunities for all participants. Join us in shaping a trustworthy and inclusive digital future where everyone can benefit from the collective intelligence.`,
  },
  buttons: [
    { label: "The Value", href: "https://freederation.github.io/valueproposal/valueproposal.html" },
    { label: "Architecture", href: "https://freederation.github.io/architect/architect.html" },
    { label: "Network", href: "https://freederation.github.io/franchise/franchise.html" }
  ]
};
