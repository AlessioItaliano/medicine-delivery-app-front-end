// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from '../../redux/auth/selectors';

import ContactUs from "components/ContactUs";

import logo from "../../images/logo.png";

// import UserMenu from 'components/UserMenu';
// import AuthNavigation from 'components/AuthNavigation';

import * as s from "./Header.styled";

const Header = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <s.Header>
      <s.Container>
        <s.Logo to="/">
          <s.Img src={logo} alt="logo" />
        </s.Logo>
        <s.Nav>
          <s.Link to="/">Shop</s.Link>
          <s.Link to="/shopping-cart">Shopping cart</s.Link>
        </s.Nav>
        <ContactUs />
      </s.Container>
    </s.Header>
  );
};

export default Header;
