import { styled } from "styled-components";
import PropTypes from "prop-types";

const WrapperButton = styled.button({
  backgroundColor: (props) => (props.color ? props.color : "blue"),
  borderTopRightRadius: (props) => (props.radius ? props.radius : "6px"),
  borderTopLeftRadius: (props) => (props.radius ? props.radius : "6px"),
  padding: (props) => (props.padding ? props.padding : "2px"),
});

export const Button = ({
  text,
  active = false,
  color,
  activeColor,
  ...props
}) => {
  console.log(text);
  return (
    <WrapperButton
      style={buttonActiveStylesHandler(active, color, activeColor)}
      {...props}
    >
      {text}
    </WrapperButton>
  );
};

function buttonActiveStylesHandler(active, color, activeColor) {
  if (active) {
    const actvColor = `${activeColor ? activeColor : "red"}`;
    return {
      backgroundColor: `${actvColor}`,
      marginBottom: "-10px",
      boxShadow: `0 0 50px 10px ${actvColor}`,
    };
  } else {
    return {
      backgroundColor: `${color ? color : "blue"}`,
      marginBottom: "",
    };
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  color: PropTypes.string,
  activeColor: PropTypes.string,
};
