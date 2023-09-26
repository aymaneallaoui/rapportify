import { Button, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const ProCard = () => {
  return (
    <div className="mx-auto w-fit ">
      <Card />
    </div>
  );
};

const Card = () => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl  bg-secondary-500 p-8 shadow-2xl shadow-secondary-500"
    >
      <div className="relative z-10 text-white">
        <Chip variant="shadow" className="">
          Premuim
        </Chip>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >
          $26.99/
          <br />
          Month
        </motion.span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem.
        </p>
      </div>
      <Button
        variant="shadow"
        className="absolute bottom-4 left-4 right-4 z-20 font-mono"
      >
        Get it Now
      </Button>
      <Background />
    </motion.div>
  );
};

const Background = () => {
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "fill-default-50" : "fill-black";
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        className={bgColor}
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        className={bgColor}
      />
    </motion.svg>
  );
};

export default ProCard;
