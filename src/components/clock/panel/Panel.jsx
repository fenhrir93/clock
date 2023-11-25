import { TimePanel } from "./panel-mode/TimePanel";
import { ModeContextProvider } from "../../../Mode.context";
import { useContext } from "react";
import { TimerPanel } from "./panel-mode/TimerPanel";
import { StopwatchPanel } from "./panel-mode/StopwatchPanel";
export const Panel = () => {
  const { clockClicked, timerClicked, stopwatchClicked } =
    useContext(ModeContextProvider);
  return (
    <div
      className="text-8xl
    text-green-400
    neon
    "
    >
      {clockClicked && <TimePanel />}
      {timerClicked && <TimerPanel />}
      {stopwatchClicked && <StopwatchPanel />}
    </div>
  );
};
