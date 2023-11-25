import { styled } from "styled-components";
import PropTypes from "prop-types";

export const WrapperButton = styled.button({
  backgroundColor: (props) => (props.color ? props.color : "blue"),
  borderTopRightRadius: (props) => (props.radius ? props.radius : "6px"),
  borderTopLeftRadius: (props) => (props.radius ? props.radius : "6px"),
  padding: (props) => (props.padding ? props.padding : "2px"),
});

export const TimerButton = ({
  text,
  active = false,
  color,
  activeColor,
  marginBottom,
  ...props
}) => {
  return (
    <WrapperButton
      style={buttonActiveStylesHandler(
        active,
        color,
        activeColor,
        marginBottom
      )}
      {...props}
    >
      {text}
    </WrapperButton>
  );
};

function buttonActiveStylesHandler(active, color, activeColor, marginBottom) {
  if (active) {
    const actvColor = `${activeColor ? activeColor : "red"}`;
    return {
      backgroundColor: `${actvColor}`,
      marginBottom: marginBottom ? "" : "-10px",
      boxShadow: `0 0 50px 10px ${actvColor}`,
    };
  } else {
    return {
      backgroundColor: `${color ? color : "blue"}`,
      marginBottom: "",
    };
  }
}

TimerButton.propTypes = {
  active: PropTypes.bool.isRequired,
  text: PropTypes.string,
  color: PropTypes.string,
  activeColor: PropTypes.string,
  marginBottom: PropTypes.bool,
};
