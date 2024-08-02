import type { AboutFreederationProps } from '$lib/types/typeProps';

export const aboutFreederationData: AboutFreederationProps = {
  title: { text: "About Freederation" },
  subtitle: { text: "Our Mission and Vision" },
  svgPath: "diagrams/process_diagram.svg",
  cards: [
    { number: 1, content: "Freederation is dedicated to fostering a collaborative and interoperable economy." },
    { number: 2, content: "Our platform connects developers, investors, and content creators to drive innovation." },
    { number: 3, content: "We aim to build a better future together through collaboration and shared goals." },
    { number: 4, content: "Join us to be a part of this exciting journey and make a positive impact on the world." }
  ]
};
