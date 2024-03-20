import MenuNav from "components/MenuNav";
import MenuAuth from "components/MenuAuth";
// import ContactUs from "components/ContactUs";

import logo from "../../images/logo.png";

import * as s from "./Header.styled";

const Header = () => {
  return (
    <s.Header>
      <s.Container>
        <s.Logo to="/">
          <s.Img src={logo} alt="logo" />
        </s.Logo>
        <MenuNav />
        {/* <ContactUs /> */}
        <MenuAuth />
      </s.Container>
    </s.Header>
  );
};

export default Header;
