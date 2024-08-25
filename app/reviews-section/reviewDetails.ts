import { StaticImageData } from "next/image";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData | string;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Aleksi Löytynoja",
    role: "Co-Founder",
    company: "Kleoverse",
    profileImg: "",
    testimonial:
      "Mohit has worked for Kleoverse for 8 months, being an important contributor to our product and the Proof-of-Talent protocol. He's a hard-working professional and performed well in a remote-first environment. Can recommend him for similar blockchain developer positions!",
  },
  {
    name: "Vanglog Zimmer",
    role: "Co-Founder",
    company: "Super Space Labs",
    profileImg: "",
    testimonial:
      "Working with Mohit was a pleasure. He delivered top-notch work with impressive speed. Mohit listened attentively to our feedback, ensuring a collaborative and efficient process. Highly recommend for any web development or code-related project!",
  },
];
