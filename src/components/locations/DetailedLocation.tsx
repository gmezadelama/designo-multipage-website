import { MapContainer, TileLayer, Marker } from "react-leaflet";

export interface IDetailedLocationProps {
  id: string;
  lat: number;
  lon: number;
  title: string;
  officeTitle: string;
  officeAddrLine1: string;
  officeAddrLine2: string;
  phoneNumber: string;
  email: string;
  reverse?: boolean;
}

const DetailedLocation = ({
  id,
  lat,
  lon,
  title,
  officeTitle,
  officeAddrLine1,
  officeAddrLine2,
  phoneNumber,
  email,
  reverse,
}: IDetailedLocationProps) => {
  const gridFlowColStyle = !!reverse
    ? "lg:grid-cols-[auto_350px]"
    : "lg:grid-cols-[350px_auto]";
  const reverseStyle = !!reverse ? "lg:order-first" : "";
  return (
    <>
      <section
        id={id}
        className={`grid grid-flow-row p-0 m-0 lg:grid-flow-col-dense h-[714px] sm:h-[683px] sm:gap-[31px] lg:gap-[30px] ${gridFlowColStyle} lg:h-[326px]`}
      >
        <div
          className={` h-[320px] w-full sm:h-[326px] lg:max-w-[350px] sm:rounded-[15px]`}
        >
          <MapContainer center={[lat, lon]} zoom={17} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lon]} />
          </MapContainer>
        </div>
        <div
          className={`bg-[#FDF3F0] bg-pattern-three-circles bg-no-repeat grid gap-6 py-[80px] h-[394px] sm:bg-pattern-two-circles sm:bg-[bottom_left] sm:pl-[88px] sm:h-[326px] lg:pl-[95px] sm:rounded-[15px] ${reverseStyle}`}
        >
          <h2
            className={
              "text-peach text-center text-[32px] leading-9 font-medium sm:text-left mb-0 mt-auto"
            }
          >
            {title}
          </h2>
          <div className={"grid grid-flow-row gap-6 sm:grid-flow-col"}>
            <div
              className={"text-[15px] leading-[25px] text-center sm:text-left"}
            >
              <div className={"font-bold"}>{officeTitle}</div>
              <div className={""}>{officeAddrLine1}</div>
              <div className={""}>{officeAddrLine2}</div>
            </div>
            <div
              className={"text-[15px] leading-[25px] text-center sm:text-left"}
            >
              <div className={"font-bold"}>{"Contact"}</div>
              <div className={""}>{`P: ${phoneNumber}`}</div>
              <div className={""}>{`M: ${email}`}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailedLocation;
