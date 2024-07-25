import React from "react";

const Progress = ({ title, progress }: { title: string; progress: number }) => {
  let bgColor;
  let label;

  if (progress <= 20) {
    bgColor = 'bg-red-600 dark:bg-red-500';
    label = 'Learning';
  } else if (progress <= 40) {
    bgColor = 'bg-yellow-600 dark:bg-yellow-500';
    label = 'Basic';
  } else if (progress <= 60) {
    bgColor = 'bg-blue-600 dark:bg-blue-500';
    label = 'Basic';
  } else if (progress <= 80) {
    bgColor = 'bg-purple-600 dark:bg-purple-500';
    label = 'Advanced';
  } else {
    bgColor = 'bg-green-600 dark:bg-green-500';
    label = 'Expert';
  }

  return (
    <>
      <div className="mb-1 text-lg font-medium dark:text-white">{title}</div>
      <div className="flex items-center mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className={`h-2.5 rounded-full ${bgColor}`} style={{ width: `${progress}%` }}></div>
        </div>
        <div className="ml-2 text-sm font-medium dark:text-white">{label}</div>
      </div>
    </>
  );
};

export default Progress;
