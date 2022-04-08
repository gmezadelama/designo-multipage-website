import React from "react";

export interface ICompanyMenuFooterProps {}

const CompanyMenuFooter = (props: ICompanyMenuFooterProps) => {
  return (
    <div className={"grid grid-cols-[1fr_auto]"}>
      <div className={`bg-logo-light w-[195px] h-[24px] bg-cover`} />
      <div
        className={
          "hidden sm:inline-grid sm:grid-flow-col sm:auto-cols-auto sm:gap-[42px]"
        }
      >
        <div className={` text-white uppercase cursor-pointer`}>
          {"Our Company"}
        </div>
        <div className={` text-white uppercase cursor-pointer`}>
          {"Locations"}
        </div>
        <div className={` text-white uppercase cursor-pointer`}>
          {"Contact"}
        </div>
      </div>
      <div className={"sm:hidden"}>
        <button
          className={"icon-burger"}
          onClick={() => {
            console.log("burger");
          }}
        />
      </div>
    </div>
  );
};

export default CompanyMenuFooter;
