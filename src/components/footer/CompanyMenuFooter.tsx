export interface ICompanyMenuFooterProps {
  disableClickHome?: boolean;
}

const CompanyMenuFooter = ({ disableClickHome }: ICompanyMenuFooterProps) => {
  const redirectHome = () => {
    if (!!disableClickHome) return;
  };
  const logoHoveringStyle = !disableClickHome ? "hover:cursor-pointer" : "";
  return (
    <div className={"sm:grid sm:grid-cols-[1fr_auto] bg-black"}>
      <div
        className={`mx-auto my-0 sm:m-0 bg-logo-light w-[195px] h-[24px] bg-cover ${logoHoveringStyle}`}
        onClick={redirectHome}
      />
      <div
        className={
          "inline-grid pt-8 mt-8 border-t gap-8 text-center border-white border-opacity-10 w-full sm:border-0 sm:pt-0 sm:mt-0 sm:grid-flow-col sm:auto-cols-auto sm:gap-[42px] sm:text-left"
        }
      >
        <div className={` text-white uppercase cursor-pointer tracking-[2px]`}>
          {"Our Company"}
        </div>
        <div className={` text-white uppercase cursor-pointer tracking-[2px]`}>
          {"Locations"}
        </div>
        <div className={` text-white uppercase cursor-pointer tracking-[2px]`}>
          {"Contact"}
        </div>
      </div>
    </div>
  );
};

export default CompanyMenuFooter;
