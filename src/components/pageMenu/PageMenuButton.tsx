import React from "react";

export interface IPageMenuButtonProps {
  title: string;
  backgroundClass: string;
  backgroundHoverClass: string;
  onClick?: () => void;
}

const PageMenuButton = ({
  title,
  backgroundClass,
  backgroundHoverClass,
  onClick,
}: IPageMenuButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`${backgroundClass} bg-no-repeat bg-cover rounded-[15px] w-full h-full py-[90px] grid grid-flow-row gap-6 justify-center mx-auto sm:py-[53px] md:py-[109px] lg:py-[105px] hover:cursor-pointer ${backgroundHoverClass}`}
    >
      <div
        className={
          "text-white uppercase tracking-[5px] text-[28px] leading-9 mt-auto mb-0 md:text-[34px] md:leading-[40px] lg:text-[40px] lg:leading-[48px]"
        }
      >
        {title}
      </div>
      <div className={"inline-block mx-auto"}>
        <div
          className={
            "text-[15px] leading-[22px] uppercase text-white tracking-[2px] inline-block"
          }
        >
          {"View Projects"}
        </div>
        <div
          className={
            "text-[15px] leading-[22px] text-peach inline-block ml-[21px] md:ml-4"
          }
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

export default PageMenuButton;
