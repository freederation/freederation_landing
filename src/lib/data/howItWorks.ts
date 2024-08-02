import type { HowItWorksProps } from '$lib/types/typeProps';

export const howItWorksData: HowItWorksProps = {
  title: { text: "How Freederation Works" },
  subtitle: { text: "Join Freederation to contribute to open-source projects, invest in innovative ideas, and share quality content with the world." },
  steps: [
    {
      heading: "Are you a Developer?",
      description: "Become part of a Regen-Star in Freederation to gain recognition and financial backing for your open-source projects. Establish mutual partnerships with Meta-Islands and Regen-Planets, ensure quality content, and earn rewards for your contributions. Start your journey, fund your project, and build your prestige in the open-source community.",
      img: {
        src: "/figures/regen_star.svg",
        alt: "Regen Star"
      }
    },
    {
      heading: "Want to Invest?",
      description: "Become a Regen-Planet to supervise Meta-Islands, ensure adherence to standards, and earn commissions. Facilitate the expansion of your Regen-Star franchise, create new Meta-Islands, and generate continuous revenue. Join now to play a pivotal role in the growth and integrity of the Freederation ecosystem.",
      img: {
        src: "/figures/regen_planets.svg",
        alt: "Regen Planets"
      }
    },
    {
      heading: "Like Creating Content?",
      description: "Join as a Meta-Island to curate quality content, enhance search relevance, and ensure community integrity on decentralized platforms like Nostr. Gain strategic interest from sponsors, monetize your services, and elevate your reputation within Freederation. Be a key player in maintaining high standards and driving meaningful engagement.",
      img: {
        src: "/figures/meta_islands.svg",
        alt: "Meta Islands"
      }
    }
  ]
};
