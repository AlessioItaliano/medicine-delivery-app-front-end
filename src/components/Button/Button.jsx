import * as s from "./Button.styled";

const Button = ({ func, name, type, btnSize }) => {
  return (
    <s.Button type={type} onClick={func} btnSize={btnSize}>
      {name}
    </s.Button>
  );
};

export default Button;
