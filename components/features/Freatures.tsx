import React from "react";
import {
  BsCardChecklist,
  BsCloudDownload,
  BsBrush,
  BsPeople,
  BsGraphUp,
  BsShieldLock,
  BsChat,
  BsChatQuote,
} from "react-icons/bs";
import FeaturesCard from "./Card";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const RapportifyFeatures = [
  {
    id: 1,
    title: "Personalization Engine",
    desc: "Customize every rapport with client-specific data, branding elements, and personalized insights, ensuring that each interaction feels unique and meaningful.",
    icon: <BsCardChecklist />,
  },
  {
    id: 2,
    title: "Data Integration",
    desc: "Seamlessly import data from your CRM, databases, spreadsheets, and other sources to create data-driven rapports that impress and inform.",
    icon: <BsCloudDownload />,
  },
  {
    id: 3,
    title: "Templates and Styles",
    desc: "Choose from a wide array of professionally designed templates and styles to match your brand identity and industry standards.",
    icon: <BsBrush />,
  },
  {
    id: 4,
    title: "Collaboration Tools",
    desc: "Collaborate with team members in real-time, making it easy to work on reports together, get feedback, and ensure accuracy.",
    icon: <BsPeople />,
  },
  {
    id: 5,
    title: "Performance Analytics",
    desc: "Track the impact of your rapports with built-in analytics. Measure engagement, view open rates, and gather insights to fine-tune your communication strategy.",
    icon: <BsGraphUp />,
  },
  {
    id: 6,
    title: "Security and Compliance",
    desc: "Rest easy knowing that your data is protected with state-of-the-art security measures and compliance features. We take data security seriously.",
    icon: <BsShieldLock />,
  },
  {
    id: 7,
    title: "User-Friendly Interface",
    desc: "Rapportify is designed with simplicity in mind. No technical expertise required – create beautiful rapports with ease.",
    icon: <BsChat />,
  },
  {
    id: 8,
    title: "Multi-Channel Delivery",
    desc: "Reach your audience where they are. Send your AI-generated rapports via email, SMS, or integrate with your preferred communication channels for maximum impact.",
    icon: <BsChatQuote />,
  },
];

const FeaturesCardsVariants = {
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

function Freatures() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-background pb-20">
        <div className="text-center mb-20">
          <h1 className="text-2xl font-bold tracking-tight text-default-800 sm:text-4xl mt-24">
            <pre className="text-secondary-700 text-4xl">Our</pre>
            Top Features
          </h1>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10 max-w-5xl "
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
                duration: 0,
                ease: "backInOut",
                staggerChildren: 0.3,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {RapportifyFeatures.map((feature, index) => (
            <motion.div variants={FeaturesCardsVariants} key={feature.id}>
              <FeaturesCard
                key={feature.id}
                svgIcon={feature.icon}
                featureDesc={feature.desc}
                title={feature.title}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Freatures;
