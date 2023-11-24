import PropTypes from "prop-types";

export const ModeSwitcher = ({ mode, children }) => {
  return (
    <div>
      <header className="flex justify-center gap-4">
        <button>Clock</button>
        <button>Timer</button>
        <button>Stopwatch</button>
      </header>
      {children}
    </div>
  );
};

ModeSwitcher.propTypes = {
  mode: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
