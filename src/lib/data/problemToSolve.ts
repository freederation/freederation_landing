import type { ProblemToSolveProps } from '$lib/types/typeProps';

export const problemToSolveData: ProblemToSolveProps = {
  title: { text: "Problem to Solve" },
  subtitle: { text: "This is an example of a responsive width component using custom CSS classes." },
  svgPath: "/diagrams/diagrams_of_solutions.svg",
  cards: [
    { frontFace: "Decentralized Control", backFace: "Empowers communities to manage and govern their projects without centralized authority." },
    { frontFace: "User Empowerment", backFace: "Enables users to take control of their data and contributions, enhancing personal agency and influence." },
    { frontFace: "Open Source Collaboration", backFace: "Facilitates collective development and improvement of software through transparent and open contributions." },
    { frontFace: "Interoperability", backFace: "Ensures seamless interaction and compatibility between different systems and platforms." },
    { frontFace: "Data Privacy", backFace: "Prioritizes the protection of user data, maintaining confidentiality and security." },
    { frontFace: "Scalable Ecosystem", backFace: "Supports growth and expansion, accommodating increasing numbers of users and applications." }
  ]
};
