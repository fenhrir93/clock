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
     center
     "
      >
        <Panel />
      </div>
    </ModeSwitcher>
  );
};
