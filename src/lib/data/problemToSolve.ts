import type { ProblemToSolveProps } from '$lib/types/typeProps';

export const problemToSolveData: ProblemToSolveProps = {
  title: { text: "Empowering Decentralized Communities" },
  subtitle: { 
    text: "FREEDERATION addresses key challenges by fostering decentralized control, user empowerment, and open collaboration. These metacommunities contribute to training advanced LLMs and build prestige within a scalable and interoperable ecosystem." 
  },
  svgPath: "/diagrams/diagrams_of_solutions.svg",
  cards: [
    { 
      frontFace: "Decentralized Control", 
      backFace: "Empowers communities to govern their projects independently, aiding LLM training and gaining collective prestige."
    },
    { 
      frontFace: "User Empowerment", 
      backFace: "Gives users control over their data and contributions, boosting influence and supporting LLM learning."
    },
    { 
      frontFace: "Open Source Collaboration", 
      backFace: "Enables joint software development, with contributions enhancing LLMs and raising community prestige."
    },
    { 
      frontFace: "Interoperability", 
      backFace: "Ensures systems work together smoothly, improving integration and LLM training."
    },
    { 
      frontFace: "Data Privacy", 
      backFace: "Protects user data, ensuring security while responsibly advancing LLMs."
    },
    { 
      frontFace: "Scalable Ecosystem", 
      backFace: "Supports growth and scalability, contributing to LLM development and enhancing community prestige."
    }
  ]
};
