import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const BuisnessLevel = () => {
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
        {/* <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          Entreprise
        </span> */}
        <Chip variant="shadow" className="">
          Entreprise
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
          +$300/
          <br />
          Month
        </motion.span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem.
        </p>
      </div>
      {/* <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        Get it now
      </button> */}
      <Button
        variant="shadow"
        className="absolute bottom-4 left-4 right-4 z-20 font-mono"
      >
        Contact Us Now
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
      <motion.svg
        width="383"
        height="429"
        viewBox="0 0 383 429"
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
          d="M8.40919 404.419C23.0523 429.976 53.532 435.733 76.4875 417.276C99.443 398.819 106.182 363.139 91.5386 337.581C76.8955 312.024 46.4158 306.267 23.4603 324.724C0.504718 343.181 -6.23388 378.861 8.40919 404.419ZM198.3 260.705C199.402 254.869 196.254 249.375 191.269 248.434L110.035 233.092C105.05 232.151 100.116 236.118 99.0138 241.954C97.9117 247.789 101.059 253.283 106.044 254.224L178.252 267.862L162.288 352.391C161.186 358.226 164.334 363.72 169.319 364.662C174.304 365.603 179.238 361.636 180.34 355.8L198.3 260.705ZM54.9452 379.677L194.245 267.677L184.302 250.323L45.0026 362.323L54.9452 379.677Z"
          className={bgColor}
          variants={{
            hover: {
              scale: 1.18,
              y: -65,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.2,
          }}
        />
        <motion.path
          d="M369.303 112.485C376.19 112.965 382.05 107.764 382.393 100.869C382.735 93.9739 377.43 87.9953 370.543 87.5154L369.303 112.485ZM97.0198 80.9832L165.435 158.08L241.008 91.0168L172.593 13.92L97.0198 80.9832ZM370.543 87.5154L169.634 73.5154L168.394 98.4846L369.303 112.485L370.543 87.5154Z"
          className={bgColor}
          variants={{
            hover: {
              scaleX: 0.68,
              y: 45,
              rotateX: 10,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.1,
          }}
        />
      </motion.svg>
    </>
  );
};

export default BuisnessLevel;
