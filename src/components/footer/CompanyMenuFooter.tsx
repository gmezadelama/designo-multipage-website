import { useNavigate } from "react-router-dom";
import { DesignoRoutes } from "../../utils/constants";

export interface ICompanyMenuFooterProps {
  disableClickHome?: boolean;
}

const CompanyMenuFooter = ({ disableClickHome }: ICompanyMenuFooterProps) => {
  const navigate = useNavigate();
  const redirectHome = () => {
    if (!!disableClickHome) return;
    navigate(DesignoRoutes.Home);
  };
  const onClickOurCompany = () => {
    navigate(DesignoRoutes.AboutUs);
  };
  const onClickLocations = () => {
    navigate(DesignoRoutes.Locations);
  };
  const onClickContact = () => {
    navigate(DesignoRoutes.Contact);
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
        <div
          className={` text-white uppercase cursor-pointer tracking-[2px]`}
          onClick={onClickOurCompany}
        >
          {"Our Company"}
        </div>
        <div
          className={` text-white uppercase cursor-pointer tracking-[2px]`}
          onClick={onClickLocations}
        >
          {"Locations"}
        </div>
        <div
          className={` text-white uppercase cursor-pointer tracking-[2px]`}
          onClick={onClickContact}
        >
          {"Contact"}
        </div>
      </div>
    </div>
  );
};

export default CompanyMenuFooter;
