import DetailedLocation from "./DetailedLocation";

const DetailedLocationsList = () => {
  return (
    <>
      <div className="grid gap-10 mx-auto sm:gap-[120px] lg:gap-12">
        <DetailedLocation
          id={"canada"}
          title={"Canada"}
          mapClass={
            "detailed-location-canada sm:detailed-location-canada-tablet lg:detailed-location-canada"
          }
          officeTitle={"Designo Central Office"}
          officeAddrLine1={"3886 Wellington Street"}
          officeAddrLine2={"Toronto, Ontario M9C 3J5"}
          phoneNumber={"+1 253-863-8967"}
          email={"contact@designo.co"}
        />
        <DetailedLocation
          id={"australia"}
          title={"Australia"}
          mapClass={
            "detailed-location-australia sm:detailed-location-australia-tablet lg:detailed-location-australia"
          }
          officeTitle={"Designo AU Office"}
          officeAddrLine1={"19 Balonne Street"}
          officeAddrLine2={"New South Wales 2443"}
          phoneNumber={"(02) 6720 9092"}
          email={"contact@designo.au"}
          reverse
        />
        <DetailedLocation
          id={"uk"}
          title={"United Kingdom"}
          mapClass={
            "detailed-location-uk sm:detailed-location-uk-tablet lg:detailed-location-uk"
          }
          officeTitle={"Designo UK Office"}
          officeAddrLine1={"13 Colorado Way"}
          officeAddrLine2={"Rhyd-y-fro SA8 9GA"}
          phoneNumber={"078 3115 1400"}
          email={"contact@designo.uk"}
        />
      </div>
    </>
  );
};

export default DetailedLocationsList;
