import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DesignoRoutes } from "../../utils/constants";

export interface IHeaderProps {
  disableClickHome?: boolean;
  onToggleMenu?: (isOpen: boolean) => void;
}

const Header = ({ disableClickHome, onToggleMenu }: IHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!!onToggleMenu) {
      onToggleMenu(isMenuOpen);
    }
  }, [isMenuOpen, onToggleMenu]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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
    <>
      <div
        className={
          "grid grid-cols-[1fr_auto] px-6 pt-[35px] pb-[37px] sm:px-10 sm:py-16 lg:px-[164px]"
        }
      >
        <div
          className={`bg-logo-dark w-[195px] h-[24px] bg-cover ${logoHoveringStyle}`}
          onClick={redirectHome}
        />
        <div
          className={
            "hidden sm:inline-grid sm:grid-flow-col sm:auto-cols-auto sm:gap-[42px]"
          }
        >
          <div
            className={` text-darkGrey uppercase cursor-pointer tracking-[2px]`}
            onClick={onClickOurCompany}
          >
            {"Our Company"}
          </div>
          <div
            className={` text-darkGrey uppercase cursor-pointer tracking-[2px]`}
            onClick={onClickLocations}
          >
            {"Locations"}
          </div>
          <div
            className={` text-darkGrey uppercase cursor-pointer tracking-[2px]`}
            onClick={onClickContact}
          >
            {"Contact"}
          </div>
        </div>
        <div className={"h-6 sm:hidden"}>
          <button
            className={`${!isMenuOpen ? "icon-burger" : "icon-close"}`}
            onClick={toggleMenu}
          />
        </div>
      </div>
      {isMenuOpen && (
        <nav
          className={
            "bg-[rgba(0,0,0,0.5)] h-[calc(100vh-96px)] sm:hidden z-10 w-[100vw] absolute top-[96px]"
          }
        >
          <div className={"px-6 py-12 grid bg-black gap-8"}>
            <div
              className={` bg-black text-white text-[1.5rem] tracking-[2px] uppercase cursor-pointer`}
              onClick={onClickOurCompany}
            >
              {"Our company"}
            </div>
            <div
              className={` bg-black text-white text-[1.5rem] tracking-[2px] uppercase cursor-pointer`}
              onClick={onClickLocations}
            >
              {"Locations"}
            </div>
            <div
              className={` bg-black text-white text-[1.5rem] tracking-[2px] uppercase cursor-pointer`}
              onClick={onClickContact}
            >
              {"Contact"}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
