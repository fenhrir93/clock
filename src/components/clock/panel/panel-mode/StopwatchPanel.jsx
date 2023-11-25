import { PanelButtons } from "./PanelButtons";
import { useTimerHook } from "../../../../hooks/useTimerHook";

export const StopwatchPanel = () => {
  const timerConfig = useTimerHook({ isTimer: false });

  return (
    <div className="center flex-col">
      <div className="center flex-col p-4">
        <input
          style={{ all: "unset" }}
          onChange={(e) => {
            return timerConfig.onSetTimerHandler(e.target.value);
          }}
          type="time"
          value={timerConfig.timer}
          step="1"
        />
      </div>
      <div className="center gap-4">
        <PanelButtons {...timerConfig} />
      </div>
    </div>
  );
};
