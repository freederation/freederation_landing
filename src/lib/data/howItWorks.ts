import type { HowItWorksProps } from '$lib/types/typeProps';

export const howItWorksData: HowItWorksProps = {
  title: { text: "Discover How Freederation", highlightedText: "Empowers You" },
  subtitle: { 
    text: "In Freederation, prestige is key. Doing things right deserves recognition, don’t you think? As a Meta-Island, you'll create or curate content aligned with your passion, contributing to a growing knowledge network that powers advanced LLMs. But remember, you’re not alone—only unique, valuable content will earn you real recognition. Stand out, embrace the challenge, and make your mark in the Freederation ecosystem."
  },
  steps: [
    {
      heading: "Are You a Developer?",
      description: "Step into the heart of innovation with Freederation. As a Regen-Star, your open-source projects gain the visibility and financial support they deserve. Forge powerful alliances with Meta-Islands and Regen-Planets, safeguard the quality of your contributions, and build a lasting reputation in the open-source community. Start now and let your code make an impact.",
      img: {
        src: "/figures/regen_star.png",
        alt: "Regen Star"
      }
    },
    {
      heading: "Ready to Invest?",
      description: "Shape the future by becoming a Regen-Planet in Freederation. Oversee and support Meta-Islands, ensuring they uphold the highest standards. Expand your Regen-Star franchise, nurture new Meta-Islands, and enjoy a steady stream of revenue. Your investment not only grows your portfolio but also strengthens the ecosystem's integrity and success.",
      img: {
        src: "/figures/regen_planets.png",
        alt: "Regen Planets"
      }
    },
    {
      heading: "Passionate About Content?",
      description: "In Freederation, prestige is key. Doing things right deserves recognition, don’t you think? As a Meta-Island, you'll create or curate content aligned with your passion, contributing to a growing knowledge network that powers advanced LLMs. But remember, you’re not alone—only unique, valuable content will earn you real recognition. Stand out, embrace the challenge, and make your mark in the Freederation ecosystem.",
      img: {
        src: "/figures/meta_islands.png",
        alt: "Meta Islands"
      }
    }
  ]
};
