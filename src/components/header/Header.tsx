import React, { useState } from "react";

export interface IHeaderProps {
  darkMode?: boolean;
}

const Header = (props: IHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div
        className={
          "grid grid-cols-[1fr_auto] px-6 pt-[35px] pb-[37px] sm:pt-[64px] sm:pb-[67px] sm:px-0 sm:py-16"
        }
      >
        <div className={`bg-logo-dark w-[195px] h-[24px] bg-cover`} />
        <div
          className={
            "hidden sm:inline-grid sm:grid-flow-col sm:auto-cols-auto sm:gap-[42px]"
          }
        >
          <div
            className={` text-darkGrey uppercase cursor-pointer tracking-[2px]`}
          >
            {"Our Company"}
          </div>
          <div
            className={` text-darkGrey uppercase cursor-pointer tracking-[2px]`}
          >
            {"Locations"}
          </div>
          <div
            className={` text-darkGrey uppercase cursor-pointer tracking-[2px]`}
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
        <nav className={"bg-[rgba(0,0,0,0.5)] h-[calc(100vh-96px)] sm:hidden"}>
          <div className={"px-6 py-12 grid bg-black gap-8"}>
            <div
              className={` bg-black text-white text-[1.5rem] tracking-[2px] uppercase cursor-pointer`}
            >
              {"Our company"}
            </div>
            <div
              className={` bg-black text-white text-[1.5rem] tracking-[2px] uppercase cursor-pointer`}
            >
              {"Locations"}
            </div>
            <div
              className={` bg-black text-white text-[1.5rem] tracking-[2px] uppercase cursor-pointer`}
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
