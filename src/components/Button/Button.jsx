import * as s from "./Button.styled";

const Button = ({ func, name, type, disabled, children }) => {
  return (
    <s.Button type={type} onClick={func} disabled={disabled}>
      <s.Container>
        {children}
        <s.Title>{name}</s.Title>
      </s.Container>
    </s.Button>
  );
};

export default Button;
