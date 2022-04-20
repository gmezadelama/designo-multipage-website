import Location from "./Location";

const LocationsList = () => {
  return (
    <>
      <div className="grid gap-12 mx-auto sm:gap-20 lg:gap-0 lg:grid-cols-3">
        <Location
          title={"Canada"}
          hashLink={"canada"}
          imageClass={"location-canada"}
          imageSrc={"/assets/shared/desktop/illustration-canada.svg"}
        />
        <Location
          title={"Australia"}
          hashLink={"australia"}
          imageClass={"location-australia"}
          imageSrc={"/assets/shared/desktop/illustration-australia.svg"}
        />
        <Location
          title={"United Kingdom"}
          hashLink={"uk"}
          imageClass={"location-uk"}
          imageSrc={"/assets/shared/desktop/illustration-united-kingdom.svg"}
        />
      </div>
    </>
  );
};

export default LocationsList;
