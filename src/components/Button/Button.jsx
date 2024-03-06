import * as s from "./Button.styled";

const Button = ({ func, name, type, btnSize, disabled }) => {
  return (
    <s.Button type={type} onClick={func} btnSize={btnSize} disabled={disabled}>
      {name}
    </s.Button>
  );
};

export default Button;
