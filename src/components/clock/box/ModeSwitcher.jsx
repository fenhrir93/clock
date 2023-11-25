import PropTypes from "prop-types";
import { Button } from "../../../UI/Button";
import { useState } from "react";

const BUTTONS_CONFIG = [{}];

export const ModeSwitcher = ({ mode, children }) => {
  const [clockClicked, setClockClicked] = useState(true);
  const [timerClicked, setTimerClicked] = useState(false);
  const [stopwatchClicked, setStopwatchClicked] = useState(false);
  return (
    <div>
      <header className="center gap-4 h-7">
        <Button
          text="Clock"
          active={clockClicked}
          color="#7071E8"
          activeColor="#C683D7"
          onClick={() => {
            setClockClicked(true);
            setTimerClicked(false);
            setStopwatchClicked(false);
          }}
        />
        <Button
          text="Timer"
          active={timerClicked}
          color="green"
          activeColor="yellow"
          onClick={() => {
            setTimerClicked(true);
            setClockClicked(false);
            setStopwatchClicked(false);
          }}
        />
        <Button
          text="Stopwatch"
          active={stopwatchClicked}
          color="#7ED7C1"
          activeColor="#F0DBAF"
          onClick={() => {
            setStopwatchClicked(true);
            setClockClicked(false);
            setTimerClicked(false);
          }}
        />
      </header>
      {children}
    </div>
  );
};

ModeSwitcher.propTypes = {
  mode: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
