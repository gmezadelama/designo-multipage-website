import DarkButton from "../components/buttons/DarkButton";

export interface ILocationProps {
  imageClass: string;
  imageSrc: string;
  title: string;
}

const Location = ({ imageClass, imageSrc, title }: ILocationProps) => {
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
            <DarkButton label={"See Location"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
