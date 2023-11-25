import { Panel } from "../panel/Panel";
import { ModeSwitcher } from "./ModeSwitcher";

export const Box = () => {
  return (
    <ModeSwitcher>
      <div
        className="min-w-[25vw] min-h-[20vh] bg-gray-900 
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
