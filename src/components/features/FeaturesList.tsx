export interface IFeaturesListProps {
  children: JSX.Element[];
}

const FeaturesList = (props: IFeaturesListProps) => {
  return (
    <>
      <div
        className={
          "grid grid-flow-row gap-y-[40px] sm:gap-y-8 md:grid-cols-3 md:gap-x-[30px] md:gap-y-8"
        }
      >
        {props.children}
      </div>
    </>
  );
};

export default FeaturesList;
