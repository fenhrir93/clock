import { useReducer } from "react";
import { useSubscription } from "observable-hooks";
import { interval } from "rxjs";
import moment from "moment";

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

export const useTimerHook = ({ isTimer = false }) => {
  const [{ start, pause, reset, timer }, dispatch] = useReducer(
    timerReducer,
    initTimeReducerState
  );

  const timeFormat = "HH:mm:ss";

  const interval$ = interval(1000);
  const subscription$ = useSubscription(interval$, () => {
    if (!pause && start) {
      const newTimer = moment(timer, timeFormat)
        [isTimer ? "subtract" : "add"](1, "seconds")
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

  const onSetTimerHandler = (value) => {
    dispatch({ type: "timer", value });
  };

  const onStartHandler = (value) => {
    
    console.log(value);
    dispatch({ type: "start", value });
  };

  const onPauseHandler = () => {
    dispatch({ type: "pause" });
  };

  const onResetHandler = () => {
    dispatch({ type: "reset" });
  };

  const panelButtonsConfig = {
    start,
    pause,
    reset,
    timer,
    onStartHandler,
    onPauseHandler,
    onResetHandler,
    onSetTimerHandler,
  };

  return panelButtonsConfig;
};
