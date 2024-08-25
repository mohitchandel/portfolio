import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I Create Stunning Blockchain Solutions and Powerful Digital Experiences."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#01ef8b] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-white md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "I’m a blockchain and full stack developer with a passion for creating innovative solutions. My expertise in blockchain technology allows me to develop secure, decentralized applications, while my full stack skills ensure seamless integration of front-end and back-end components."
              }
            />
            <AnimatedBody
              text={
                "With experience in frameworks like Next.js, React, and Vue.js, I build intuitive and high-performance web applications. I’m dedicated to solving complex challenges and delivering solutions that exceed expectations."
              }
            />
            <AnimatedBody
              text={
                "My approach combines creativity with technical precision, focusing on clear communication and timely delivery. I’m excited to collaborate on projects that push the boundaries of technology and achieve exceptional results."
              }
            />

            <AnimatedBody
              text={
                "Let’s work together to bring your ideas to life and create something remarkable."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-white/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Programming Languages"}
                className={
                  "text-[24px] text-white md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Solidity, JavaScript, React, Next.js, TypeScript, Cadence, Rust, Tact"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Libraries/Frameworks"}
                className={
                  "text-[24px] text-white md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Web3.js, Ethers.js, Wagmi, viem, Tailwind CSS, Hardhat, Foundry"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Blockchains"}
                className={
                  "text-[24px] text-white md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={"Ethereum, BSC, Polygon, Flow, Ton, Near Protocol"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
