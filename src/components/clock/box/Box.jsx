import { ModeSwitcher } from "./ModeSwitcher";

export const Box = () => {
  return (
    <ModeSwitcher>
      <div
        className="w-[40vw] h-[20vh] bg-gray-600 
     border-black
     border-8
     rounded-3xl"
      ></div>
    </ModeSwitcher>
  );
};
