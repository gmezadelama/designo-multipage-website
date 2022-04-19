export interface IShowcaseProps {
  children: JSX.Element[];
}

const Showcase = (props: IShowcaseProps) => {
  return (
    <>
      <div
        className={
          "grid grid-flow-row gap-y-[40px] sm:gap-y-8 lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-8"
        }
      >
        {props.children}
      </div>
    </>
  );
};

export default Showcase;
