"use client";
import { Button } from "@nextui-org/button";
import { Code, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
export default function Hero() {
  return (
    <div className=" bg-background">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-[200px] sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr  from-primary-500 to-secondary-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] saturate-200"
            style={{
              clipPath:
                "polygon(41% 16%, 70% 26%, 100% 35%, 93% 73%, 56% 94%, 0 93%, 26% 59%, 0 49%, 12% 20%)",
            }}
          />
        </div>
        <div className=" lg:flex lg:flex-row justify-between flex flex-col  sm:flex sm:flex-col">
          <div className="my-content mx-auto max-w-2xl  py-28 sm:py-48 lg:py-28">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <Code color="secondary" className=" hover:cursor-pointer">
                Read success story{" "}
                <Link aria-hidden="true" className=" mr-2">
                  &rarr;
                </Link>
              </Code>
            </div>

            <div className=" text-center">
              <h1 className="text-4xl font-bold tracking-tight text-default-800 sm:text-6xl">
                <pre className=" text-secondary-700">Rapportify</pre>
                Revolutionize you Rapports
              </h1>
              <p className="mt-6 text-lg leading-8   text-foreground">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link isBlock showAnchorIcon href="#" color="secondary">
                  FAQ
                </Link>
                <Link isBlock showAnchorIcon href="#" color="secondary">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <div className=" mx-auto max-w-2xl  py-28 sm:py-48 lg:py-28">
            <FloatingPhone />
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden  blur-[250px] sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff4190] to-[#65d3ff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] saturate-200"
            style={{
              clipPath:
                "polygon(42% 41%, 69% 42%, 100% 35%, 93% 73%, 55% 65%, 0 93%, 26% 59%, 0 49%, 12% 20%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px]  bg-secondary h-96 w-56"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      {/* Example logo from logoispum */}
      {/* <svg
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" fill-secondary"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        ></path>
      </svg> */}

      {/* <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium text-violet-500 backdrop-blur">
        Get Started
      </button> */}
      <Button
        variant="shadow"
        color="primary"
        size="lg"
        className="absolute bottom-4 left-4 right-4 z-10 "
      >
        Get Started
      </Button>

      {/* <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-500" /> */}
      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-secondary-400" />
    </div>
  );
};
