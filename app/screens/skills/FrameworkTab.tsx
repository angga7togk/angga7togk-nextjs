import React from "react";
import { TabProps } from "../constants";
import Progress from "@/components/Progress";

const FrameworkTab: React.FC<TabProps> = ({ active, onChangeTab }) => {
  return (
    <main className={`w-full h-[75dvh] ${active ? "block" : "hidden"} overflow-auto`}>
      <Progress title="Tailwind CSS" progress={80} />
      <Progress title="Bootstrap" progress={40} />
      <Progress title="DaisyUI" progress={50} />
      <Progress title="ReactJS" progress={70} />
      <Progress title="NextJS" progress={70} />
      <Progress title="NodeJS" progress={60} />
      <Progress title="ExpressJS" progress={70} />
      <Progress title="AstroJS" progress={70} />
      <Progress title="Laravel" progress={65} />
      <Progress title="Prisma ORM" progress={50} />
      <Progress title="API / REST API" progress={70} />
      <Progress title="WORDPRESS" progress={10} />
      <Progress title="NestJS" progress={10} />
    </main>
  );
};

export default FrameworkTab;
