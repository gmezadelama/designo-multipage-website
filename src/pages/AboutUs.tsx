import AboutUsHeader from "../components/aboutus/AboutUsHeader";
import RealDeal from "../components/aboutus/RealDeal";
import WorldClassTalent from "../components/aboutus/WorldClassTalent";
import LocationsList from "../components/locations/LocationsList";
import GeneralLayout from "./layouts/GeneralLayout";
import HomeContentLayout from "./layouts/HomeContentLayout";

const AboutUs = () => {
  return (
    <>
      <GeneralLayout>
        <HomeContentLayout>
          <AboutUsHeader />
          <WorldClassTalent />
          <LocationsList />
          <RealDeal />
        </HomeContentLayout>
      </GeneralLayout>
    </>
  );
};

export default AboutUs;
