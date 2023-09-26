import React, { useRef } from "react";
import ProCard from "./ProCard";
import PremuimCard from "./FreeCard";
import BuisnessLevel from "./BuisnessLevel";
import { Variant, animate, motion, useInView } from "framer-motion";
const draw = {
  onScreen: { pathLength: 0, opacity: 0 },
  offScreen: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 2, bounce: 0 },
      opacity: { duration: 0.01 },
      delay: 0.5,
    },
  },
};

const CardsVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "backInOut",
    },
  },
};

function Pricing() {
  return (
    <motion.div
      transition={{
        when: "beforeChildren",
        staggerChildren: 0.5,
      }}
    >
      <motion.div
        className=" relative  text-4xl font-bold tracking-tight text-default-800 sm:text-6xl text-center  z-10"
        transition={{
          staggerChildren: 0.5,
          when: "beforeChildren",
        }}
      >
        <motion.h1
          className=" text-secondary-900 mb-1  font-mono inline-block  cursor-pointer shadow-secondary-500 bg-transparent relative z-10  "
          initial={{ scale: 0.85, y: 30, opacity: 0 }}
          whileInView={{
            scale: 1,
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "backInOut",
              bounce: 1.5,
            },
          }}
          viewport={{ once: true }}
        >
          Plans
        </motion.h1>

        <motion.svg
          className=" w-56 h-56 absolute left-1/2 transform -translate-x-1/2   -top-12  z-0 bg-transparent "
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 800 400"
          initial="onScreen"
          whileInView="offScreen"
          transition={{ delay: 3 }}
          viewport={{ once: true }}
        >
          <motion.path
            d="M61.64873504638672,174.19354248046875C67.45518615722656,174.19354248046875,99.92830047607421,172.5806378173828,110.03582763671875,174.19354248046875C120.14335479736329,175.8064471435547,136.84587036132814,185.9139831542969,145.8781280517578,187.63441467285156C154.9103857421875,189.35484619140624,176.70249145507813,189.28315979003906,185.3046417236328,188.5304718017578C193.9067919921875,187.77778381347656,208.5304559326172,181.03943420410155,217.56271362304688,181.3620147705078C226.59497131347655,181.68459533691407,249.605712890625,190.78853576660157,260.5734558105469,191.21864318847656C271.54119873046875,191.64875061035156,298.4229357910156,183.97850158691406,308.9605712890625,184.9462432861328C319.4982067871094,185.91398498535156,338.279560546875,198.63799621582032,348.3870849609375,199.2831573486328C358.494609375,199.9283184814453,384.37273559570315,189.46237121582033,393.18994140625,190.3225860595703C402.00714721679685,191.1828009033203,413.7992822265625,205.80645324707032,421.8638000488281,206.4516143798828C429.9283178710937,207.0967755126953,446.2007080078125,194.83871398925783,460.3942565917969,195.6989288330078C474.5878051757812,196.5591436767578,517.2401477050781,211.57706115722655,540.1433715820312,213.6200714111328C563.0465954589844,215.66308166503907,631.577041015625,214.01433654785157,651.2544555664062,212.72401428222656C670.9318701171875,211.43369201660155,697.7777416992187,204.05018127441406,704.121826171875,202.8673858642578"
            fill="none"
            strokeWidth="25"
            stroke="#fcd34d"
            strokeLinecap="round"
            variants={draw}
          ></motion.path>
        </motion.svg>

        <motion.h1
          className="text-4xl font-bold tracking-tight text-default-800 sm:text-6xl text-center  shadow-secondary-500  block w-fit  mx-auto  relative z-10"
          initial={{ scale: 0.85, y: 30, opacity: 0 }}
          whileInView={{
            scale: 1,
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "backInOut",
              bounce: 1.5,
              delay: 0.7,
            },
          }}
          viewport={{ once: true }}
        >
          prices choose ur best plan
        </motion.h1>
      </motion.div>

      <motion.div
        className=" flex justify-center items-center  bg-transparent gap-10"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,

              ease: "backInOut",
              staggerChildren: 0.5,
            },
          },
        }}
        viewport={{ once: true }}
      >
        <motion.div
          variants={CardsVariant}
          className=" p-0 m-0 mt-20 bg-transparent"
          viewport={{ once: true }}
        >
          <PremuimCard />
        </motion.div>

        <motion.div
          variants={CardsVariant}
          className=" p-0 m-0 mt-20 bg-transparent"
          viewport={{ once: true }}
        >
          <ProCard />
        </motion.div>

        <motion.div
          variants={CardsVariant}
          className=" p-0 m-0 mt-20 bg-transparent"
          viewport={{ once: true }}
        >
          <BuisnessLevel />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

interface LettersAnimatorProps {
  Letters: string;
  className?: string;
}

const LettersAnimator = ({ Letters, className }: LettersAnimatorProps) => {
  const splitiing = Letters.split(" ");

  return (
    <>
      {splitiing.map((letter, index) => (
        <motion.span
          key={index}
          whileHover={{
            scaleX: 1.1,
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className={className}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
};

export default Pricing;
