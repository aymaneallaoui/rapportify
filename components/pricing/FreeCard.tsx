import { Button, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const PremuimCard = () => {
  return (
    <div className="mx-auto w-fit  ">
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
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-secondary-500 p-8 shadow-2xl shadow-secondary-500"
    >
      <div className="relative z-10 text-white">
        <Chip variant="shadow" className="">
          Basic
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
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]  "
        >
          $10.99/
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
    <>
      {/* <motion.svg
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
              y: 25,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.2,
          }}
          cx="160.5"
          cy="50.5"
          r="50"
          fill="#262626"
        />
        <motion.ellipse
          variants={{
            hover: {
              scaleY: 1.56,
              y: -10,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.2,
          }}
          cx="160.5"
          cy="265.5"
          rx="120.5"
          ry="120.5"
          fill="#262626"
        />
      </motion.svg> */}
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
        <motion.path
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
          d="M154.804 23C157.113 19 162.887 19 165.196 23L263.923 194C266.232 198 263.346 203 258.727 203H61.2731C56.6543 203 53.7675 198 56.077 194L154.804 23Z"
          className={bgColor}
        />
        <motion.path
          variants={{
            hover: {
              scaleY: 1.2,
              y: -20,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.3,
          }}
          d="M154.804 133C157.113 129 162.887 129 165.196 133L246.603 274C248.912 278 246.025 283 241.406 283H78.5936C73.9748 283 71.0881 278 73.3975 274L154.804 133Z"
          className={bgColor}
        />
        <motion.path
          variants={{
            hover: {
              scaleX: 1.75,
              y: -10,
              stroke: "1px",
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.35,
          }}
          d="M154.804 237C157.113 233 162.887 233 165.196 237L229.282 348C231.591 352 228.705 357 224.086 357H95.9141C91.2953 357 88.4086 352 90.718 348L154.804 237Z"
          className={bgColor}
        />
      </motion.svg>
    </>
  );
};

export default PremuimCard;
