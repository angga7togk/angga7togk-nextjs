import React from "react";
import { TabProps } from "../constants";
import Progress from "@/components/Progress";

const SoftwareTab: React.FC<TabProps> = ({ active, onChangeTab }) => {
  return (
    <main className={`w-full h-[75dvh] ${active ? "block" : "hidden"} overflow-auto`}>
      <Progress title="VS Code" progress={100} />
      <Progress title="Figma" progress={10} />
      <Progress title="Github" progress={70} />
      <Progress title="Git" progress={70} />  
      <Progress title="NPM" progress={70} />  
      <Progress title="Maven" progress={50} />  
    </main>
  );
};

export default SoftwareTab;
