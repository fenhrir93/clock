import { TimerButton } from "../../../../UI/TimerButton";
import PropTypes from "prop-types";

export const PanelButtons = ({
  start,
  pause,
  reset,
  onStartHandler,
  onPauseHandler,
  onResetHandler,
}) => {
  return (
    <>
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
    </>
  );
};

PanelButtons.propTypes = {
  start: PropTypes.bool.isRequired,
  pause: PropTypes.bool.isRequired,
  reset: PropTypes.bool.isRequired,
  onStartHandler: PropTypes.func.isRequired,
  onPauseHandler: PropTypes.func.isRequired,
  onResetHandler: PropTypes.func.isRequired,
};
