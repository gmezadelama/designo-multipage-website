export interface IDesignoAttributeProps {
  imageClass: string;
  title: string;
  description: string;
}

const DesignoAttribute = ({
  imageClass,
  title,
  description,
}: IDesignoAttributeProps) => {
  return (
    <>
      <div
        className={
          "grid gap-y-12 gap-x-0 grid-rows-[auto_auto] sm:gap-y-0 sm:gap-x-12 md:gap-y-12 md:gap-x-0 sm:grid-cols-[auto_1fr] md:grid-rows-[auto_auto] md:grid-cols-none"
        }
      >
        <div
          className={`${imageClass} bg-cover bg-no-repeat w-[202px] h-[202px] inline-block mx-auto`}
        />
        <div className={"grid gap-y-8 sm:gap-y-4 md:gap-y-8"}>
          <h3
            className={"text-center sm:text-left md:text-center mt-auto mb-0"}
          >
            {title}
          </h3>
          <div className={"text-black text-center sm:text-left md:text-center"}>
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignoAttribute;
