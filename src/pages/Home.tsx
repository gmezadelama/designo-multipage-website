import DesignoAttributesList from "../components/attributes/DesignoAttributesList";
import Hero from "../components/home/Hero";
import FullMenu from "../components/pageMenu/FullMenu";
import GeneralLayout from "./layouts/GeneralLayout";
import HomeContentLayout from "./layouts/HomeContentLayout";

const Home = () => {
  return (
    <>
      <GeneralLayout disableClickHome>
        <HomeContentLayout>
          <Hero />
          <FullMenu />
          <DesignoAttributesList />
        </HomeContentLayout>
      </GeneralLayout>
    </>
  );
};

export default Home;
