"use client";
import Hero from "@/components/Hero/Hero";
import Freatures from "@/components/features/Freatures";
import { MainNav } from "@/components/layouts/MainNav";
import Pricing from "@/components/pricing/Pricing";
import FreeTrail from "@/components/reviews/FreeTrail";
import Loader from "@/components/ui/Loader";

import NextNProgress from "nextjs-progressbar";

import { motion, useSpring, useScroll } from "framer-motion";
import { useTheme } from "next-themes";
import { Suspense, useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0% 70%", "100% 100%"],
  });

  const PathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const { theme } = useTheme();

  const svgColor = theme === "dark" ? "#9353d3" : "#7828c8";
  const svgColor2 = theme === "dark" ? "#006FEE " : "#006FEE";

  return (
    <Suspense fallback={<Loader />}>
      <NextNProgress />
      <main className=" bg-background">
        <MainNav />
        <Hero />

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -100 2450 1850"
          fill="none"
          className=" absolute  -left-96 max-w-fit   "
          ref={ref}
        >
          <motion.path
            d="M2443.39 4.64352C2142.65 260.142 1318.79 591.485 1064.77 588.799C810.752 586.114 723.968 529.293 742.833 408.423C761.699 287.554 882.36 186.889 1118.97 312.17C1334.43 426.255 1504.64 633.648 1644.41 830.118C1773.16 1011.1 1866.6 1221.81 1810.67 1405.14C1751.12 1600.33 1335.96 1595.94 1106.92 1451.28C938.183 1344.7 731.577 1035.15 893.802 896.942C1024.56 785.544 1524.88 903.613 1381.48 1263.32C1253.03 1585.55 85.1126 1545.34 0.999996 1554.05"
            strokeWidth="50"
            style={{ pathLength: PathLength }}
            stroke='url("#SvgjsLinearGradient1000")'
            strokeLinecap="round"
          />

          <defs>
            <linearGradient id="SvgjsLinearGradient1000">
              <stop stopColor={svgColor} offset="0"></stop>
              <stop stopColor={svgColor2} offset="1"></stop>
            </linearGradient>
          </defs>
        </motion.svg>

        <Freatures />
        <Pricing />
        <div className="  bg-background w-screen h-screen">
          <FreeTrail />
        </div>
      </main>
    </Suspense>
  );
}
