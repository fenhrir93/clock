import PropTypes from "prop-types";
import { TimerButton } from "../../../UI/TimerButton";
import { useContext, useState } from "react";
import { ModeContextProvider } from "../../../Mode.context";

const BUTTONS_CONFIG = [{}];

export const ModeSwitcher = ({ mode, children }) => {
  const {
    clockClicked,
    timerClicked,
    stopwatchClicked,
    onTimeModeHandler,
    onTimerModeHandler,
    onStopwatchModeHandler,
  } = useContext(ModeContextProvider);
  console.log(clockClicked);

  return (
    <div>
      <header className="center gap-4 h-7">
        <TimerButton
          text="Clock"
          active={clockClicked}
          color="#7071E8"
          activeColor="#C683D7"
          onClick={onTimeModeHandler}
        />
        <TimerButton
          text="Timer"
          active={timerClicked}
          color="green"
          activeColor="yellow"
          onClick={onTimerModeHandler}
        />
        <TimerButton
          text="Stopwatch"
          active={stopwatchClicked}
          color="#7ED7C1"
          activeColor="#F0DBAF"
          onClick={onStopwatchModeHandler}
        />
      </header>
      {children}
    </div>
  );
};

ModeSwitcher.propTypes = {
  mode: PropTypes.string,
  children: PropTypes.node.isRequired,
};
