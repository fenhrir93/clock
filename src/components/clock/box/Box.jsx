import { Panel } from "../panel/Panel";
import { ModeSwitcher } from "./ModeSwitcher";

export const Box = () => {
  return (
    <ModeSwitcher>
      <div
        className="w-[25vw] h-[20vh] bg-gray-900 
     border-black
     border-8
     rounded-3xl
     z-10
     relative
     center
     "
      >
        <Panel />
      </div>
    </ModeSwitcher>
  );
};
