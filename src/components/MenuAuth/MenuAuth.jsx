import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../redux/auth/operations";
import { selectUser, selectIsLoggedIn } from "../../redux/auth/selectors";

import { ReactComponent as UserIcon } from "../../icons/user.svg";
import Button from "components/Button";

import * as s from "./MenuAuth.styled";

const MenuAuth = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const onLogOut = () => {
    dispatch(logout());
  };
  return (
    <s.Container>
      {!isLoggedIn ? (
        <s.Link to="/register">
          <UserIcon />
          Enter
        </s.Link>
      ) : (
        <s.UserContainer>
          <s.UserName>Welcome, {user.name}</s.UserName>
          <Button func={onLogOut} name={"Logout"} type={"button"} />
        </s.UserContainer>
      )}
    </s.Container>
  );
};

export default MenuAuth;

// {
//   /* <s.Link to="/register">Register</s.Link>
//           <s.Link to="/login">Log In</s.Link> */
// }
