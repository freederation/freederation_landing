import type { AboutFreederationProps } from '$lib/types/typeProps';

export const aboutFreederationData: AboutFreederationProps = {
  title: { text: "About Freederation" },
  subtitle: { text: "Our Mission and Vision" },
  svgPath: "diagrams/process_diagram.svg",
  cards: [
    { 
      number: 1, 
      content: "Freederation creates monetizable, collaborative communities and knowledge graphs. Blockchain secures, and our systems protect and reward contributions." 
    },
    { 
      number: 2, 
      content: "Our platform unites developers, investors, and creators to drive innovation. Collaborate to transform ideas into reality." 
    },
    { 
      number: 3, 
      content: "We ensure cybersecurity and quality, safeguarding data and maintaining high standards for open-source projects." 
    },
    { 
      number: 4, 
      content: "Freederation offers insurance and risk coverage, securing projects and ensuring stability for thriving communities." 
    }
  ]
};
