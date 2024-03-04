import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import * as s from "./MenuNav.styled";

const MenuNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <s.Nav>
        <s.Link to="/">Shop</s.Link>
        <s.Link to="/shopping-cart">Shopping cart</s.Link>
        {isLoggedIn ? (
          <>
            <s.Link to="/history">History</s.Link>
            <s.Link to="/coupons">Coupons</s.Link>
          </>
        ) : null}
      </s.Nav>
    </>
  );
};

export default MenuNav;
