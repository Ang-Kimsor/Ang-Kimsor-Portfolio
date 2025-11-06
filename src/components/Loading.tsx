// React
import { type FC } from "react";

const Loading: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen transition-colors bg-gray-100 dark:bg-gray-900">
      <div className="w-16 h-16 mb-4 border-4 border-gray-300 rounded-full border-t-gray-800 dark:border-t-gray-300 dark:border-gray-800 animate-spin"></div>
      <p className="text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-200">
        Loading
      </p>
    </div>
  );
};

export default Loading;
