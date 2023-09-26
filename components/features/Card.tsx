"use client";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { useTheme } from "next-themes";

import React from "react";

interface Props {
  title: string;
  svgIcon?: React.ReactNode;
  featureDesc: string;
  className?: string;
}

function FeaturesCard({ title, svgIcon, featureDesc, className }: Props) {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "" : "bg-secondary-100 ";
  const ShadowColor =
    theme === "dark" ? "shadow-secondary-50/80" : "shadow-secondary-600/50 ";
  return (
    <>
      <Card
        className={` ${bgColor} ${ShadowColor}   shadow-2xl hover:${ShadowColor}/60 hover:-translate-y-3  w-60   h-72  transition-all duration-1000 hover:bg-secondary-200/60 ease-out mb-4 ${className}  `}
        isPressable
        isHoverable
      >
        <CardHeader className="flex flex-row gap-4 h-12">
          <div className="">{svgIcon}</div>
          <h2 className=" text-medium font-semibold tracking-wide text-secondary-700">
            {title}
          </h2>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{featureDesc}</p>
        </CardBody>
      </Card>
    </>
  );
}

export default FeaturesCard;
