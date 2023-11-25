import { createContext, useState } from "react";

const DEFAULT_STALE = {};
export const ModeContextProvider = createContext(DEFAULT_STALE);

// const modeReducer = (state, action) => {
//   switch (action.type) {
//     case "time":
//       return "time";
//     case "timer":
//       return "timer";
//     case "stopwatch":
//       return "stopwatch";
//     default:
//       return state;
//   }
// };
export const ModeContext = (props) => {
  const [clockClicked, setClockClicked] = useState(true);
  const [timerClicked, setTimerClicked] = useState(false);
  const [stopwatchClicked, setStopwatchClicked] = useState(false);

  const onTimeModeHandler = () => {
    setClockClicked(true);
    setTimerClicked(false);
    setStopwatchClicked(false);
  };

  const onTimerModeHandler = () => {
    setTimerClicked(true);
    setClockClicked(false);
    setStopwatchClicked(false);
  };
  const onStopwatchModeHandler = () => {
    setStopwatchClicked(true);
    setClockClicked(false);
    setTimerClicked(false);
  };

  const timerData = {
    clockClicked,
    timerClicked,
    stopwatchClicked,
    onTimeModeHandler,
    onTimerModeHandler,
    onStopwatchModeHandler,
  };
  return (
    <ModeContextProvider.Provider value={timerData}>
      {props.children}
    </ModeContextProvider.Provider>
  );
};
