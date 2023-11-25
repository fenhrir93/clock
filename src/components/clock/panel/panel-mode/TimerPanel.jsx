import { useReducer } from "react";
import { TimerButton } from "../../../../UI/TimerButton";
import moment from "moment";
import { useSubscription } from "observable-hooks";
import { interval } from "rxjs";
const initTimeReducerState = {
  start: false,
  reset: false,
  pause: false,
  timer: "00:00:00",
};
function timerReducer(state, action) {
  switch (action.type) {
    case "timer":
      return { ...state, timer: action.value };
    case "start":
      return { ...state, start: true, pause: false, reset: false };
    case "pause":
      return { ...state, pause: true, reset: false, start: false };
    case "reset":
      return { ...initTimeReducerState };
    default:
      return state;
  }
}
export const TimerPanel = () => {
  const [{ start, pause, reset, timer }, dispatch] = useReducer(
    timerReducer,
    initTimeReducerState
  );

  const timeFormat = "HH:mm:ss";

  const interval$ = interval(1000);
  const subscription$ = useSubscription(interval$, () => {
    if (!pause && start) {
      const newTimer = moment(timer, timeFormat)
        .subtract(1, "seconds")
        .format(timeFormat);
      dispatch({ type: "timer", value: newTimer });

      if (
        moment(newTimer, timeFormat).diff(moment("00:00:00", timeFormat)) === 0
      ) {
        dispatch({ type: "reset" });
        subscription$.current.unsubscribe();
      }
    }
  });

  const onStartHandler = () => {
    dispatch({ type: "start" });
  };

  const onPauseHandler = () => {
    dispatch({ type: "pause" });
  };

  const onResetHandler = () => {
    dispatch({ type: "reset" });
  };
  return (
    <div className="center flex-col">
      <div className="center flex-col p-4">
        <input
          style={{ all: "unset" }}
          onChange={(e) => {
            return dispatch({ type: "timer", value: e.target.value });
          }}
          type="time"
          value={timer}
          step="1"
        />
      </div>
      <div className="center gap-4">
        <TimerButton
          active={start}
          color="rgb(74 222 128)"
          activeColor="rgb(22 163 74)"
          className="w-4 h-4 rounded-lg"
          marginBottom
          onClick={onStartHandler}
        />
        <TimerButton
          active={pause}
          color="rgb(248 113 113)"
          activeColor="rgb(220 38 38)"
          className="w-4 h-4 rounded-lg"
          marginBottom
          onClick={onPauseHandler}
        />
        <TimerButton
          active={reset}
          color="#EEF5FF"
          activeColor="#9EB8D9"
          className="w-4 h-4 rounded-lg"
          marginBottom
          onClick={onResetHandler}
        />
      </div>
    </div>
  );
};

// function getButtonsConfig(active, className, onClick) {
//   return [
//     {
//       active,
//       text: "Start",
//       color: "rgb(74 222 128)",
//       activeColor: "rgb(22 163 74)",
//       marginBottom: false,
//       className,
//       onClick,
//     },
//     {
//       active,
//       text: "Pause",
//       color: "rgb(248 113 113)",
//       activeColor: "rgb(220 38 38)",
//       marginBottom: false,
//       className,
//       onClick,
//     },
//     {
//       active,
//       text: "Reset",
//       color: "#EEF5FF",
//       activeColor: "#9EB8D9",
//       marginBottom: false,
//       className,
//       onClick,
//     },
//   ];
// }
