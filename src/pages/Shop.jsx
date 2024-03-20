import Section from "components/Section";
import SideBar from "components/SideBar";

import * as s from "./Shop/Shop.styled";
import ShopList from "components/ShopList";
import SearchBar from "components/SearchBar";
import Hero from "components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <SearchBar />
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
