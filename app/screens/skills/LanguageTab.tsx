import React from "react";
import { TabProps } from "../constants";
import Progress from "@/components/Progress";

const LanguageTab: React.FC<TabProps> = ({ active, onChangeTab }) => {
  return (
    <main className={`w-full h-[75dvh] ${active ? "block" : "hidden"} overflow-auto`}>
      <Progress title="PHP" progress={70} />
      <Progress title="Java" progress={70} />
      <Progress title="Kotlin" progress={70} />
      <Progress title="JavaScript" progress={70} />
      <Progress title="TypeScript" progress={70} />
      <Progress title="Python" progress={40} />
    </main>
  );
};

export default LanguageTab;
