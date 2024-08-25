export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Account Abstraction Contract",
    description:
      "The AccountDelegation contract aims to solve the problem of allowing a Vault Manager to perform token swaps on behalf of a user without the need for the user to sign each transaction.",
    technologies: ["Solidity", "Hardhat", "TypeScript"],
    github: "https://github.com/mohitchandel/account-abstraction-contract",
    demo: "",
    image: require(".//../../public/projects/proj-1.jpg"),
    available: true,
  },
  {
    id: 1,
    name: "Treasury Smart Contract",
    description:
      "The Treasury Smart Contract is a decentralized finance (DeFi) contract that allows for the management and allocation of funds across different liquidity pools and DeFi protocols.",
    technologies: ["Solidity", "Hardhat", "TypeScript"],
    github: "https://github.com/mohitchandel/treasury-contract",
    demo: "",
    image: require(".//../../public/projects/proj-2.jpg"),
    available: true,
  },
  {
    id: 2,
    name: "SaaS Landing Page Template",
    description:
      "This SEO-friendly and visually stunning template is designed to revolutionize your online presence. Whether you're launching a new SaaS product or showcasing your existing services, our template offers a sleek and professional solution that will captivate your audience and drive conversions.",
    technologies: ["React", "Next.js", "Framer Motion", "Tailwind"],
    github: "https://github.com/mohitchandel/saas-landing-page",
    demo: "https://saas-landing-page-mocha.vercel.app/",
    image: require(".//../../public/projects/proj-3.png"),
    available: true,
  },
  {
    id: 3,
    name: "Invoice Generator",
    description:
      "This is a app for generating invoices. It allows users to input sender details, customer details, invoice details, invoice items, payout details, and additional notes to generate a PDF invoice.",
    technologies: ["React", "Tailwind CSS", "NextUI"],
    github: "https://github.com/mohitchandel/invoice-generator",
    demo: "",
    image: require(".//../../public/projects/proj-4.jpg"),
    available: true,
  },
];
