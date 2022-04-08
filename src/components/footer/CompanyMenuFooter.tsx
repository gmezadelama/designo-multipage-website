import React from "react";

export interface ICompanyMenuFooterProps {}

const CompanyMenuFooter = (props: ICompanyMenuFooterProps) => {
  return (
    <div className={"sm:grid sm:grid-cols-[1fr_auto] bg-black"}>
      <div
        className={`mx-auto my-0 sm:m-0 bg-logo-light w-[195px] h-[24px] bg-cover`}
      />
      <div
        className={
          "inline-grid pt-8 mt-8 border-t gap-8 text-center border-white w-full sm:border-0 sm:pt-0 sm:mt-0 sm:grid-flow-col sm:auto-cols-auto sm:gap-[42px] sm:text-left"
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
