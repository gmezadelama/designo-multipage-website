import DetailedLocationsList from "../components/locations/DetailedLocationsList";
import GeneralLayout from "./layouts/GeneralLayout";
import LocationsContentLayout from "./layouts/LocationsContentLayout";

const Locations = () => {
  return (
    <>
      <GeneralLayout>
        <LocationsContentLayout>
          <DetailedLocationsList />
        </LocationsContentLayout>
      </GeneralLayout>
    </>
  );
};

export default Locations;
