import { useNavigate } from "react-router-dom";
import { DesignoRoutes } from "../../utils/constants";
import DarkButton from "../buttons/DarkButton";

export interface ILocationProps {
  imageClass: string;
  imageSrc: string;
  title: string;
  hashLink?: string;
}

const Location = ({
  imageClass,
  imageSrc,
  title,
  hashLink,
}: ILocationProps) => {
  const navigate = useNavigate();
  const onClickLocation = () => {
    navigate(`${DesignoRoutes.Locations}${!!hashLink ? `#${hashLink}` : ""}`);
  };
  return (
    <>
      <div
        className={"grid gap-y-12 gap-x-0 grid-rows-[auto_auto] justify-center"}
      >
        <div className={"w-[202px] h-[202px] relative mx-auto"}>
          <div
            className={`${imageClass} bg-cover bg-no-repeat w-full h-full inline-block mx-auto`}
          ></div>
          <img
            src={imageSrc}
            className={"w-full h-full absolute top-0"}
            alt={title}
          />
        </div>
        <div className={"grid gap-y-8 w-full"}>
          <h3 className={"text-center"}>{title}</h3>
          <div className={"text-center"}>
            <DarkButton label={"See Location"} onClick={onClickLocation} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
