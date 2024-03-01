import Section from "components/Section";
import SideBar from "components/SideBar";

import * as s from "./Shop/Shop.styled";
import ShopList from "components/ShopList";

const Home = () => {
  return (
    <>
      <Section>
        <s.Container>
          <SideBar />
          <ShopList />
        </s.Container>
      </Section>
    </>
  );
};

export default Home;
