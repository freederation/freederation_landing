import type { HeroSectionProps } from '$lib/types/typeProps';

export const heroSectionData: HeroSectionProps = {
  title: { text: "Collaborative and Interoperable Economy" },
  subtitle: { text: "FREEDERATION supports and grows Open Source projects by turning them into collaborative franchises. Join us to enhance these projects, connect with innovators, and build a trustworthy digital future." },
  buttons: [
    { label: "Investors", action: () => console.log('Investors clicked') },
    { label: "Developers", action: () => console.log('Developers clicked') },
    { label: "Users", action: () => console.log('Users clicked') }
  ]
};
