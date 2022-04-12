import React from "react";

const Contact = () => {
  return (
    <>
      <div
        className={
          "hidden sm:block sm:border-t sm:h-1 sm:border-white sm:border-opacity-10 sm:mt-10 sm:mb-[30px]"
        }
      />
      <div className="p-0 mt-10 mb-0 mx-auto text-center grid gap-[40px] sm:mt-0 sm:w-full sm:gap-0 sm:flex sm:grid-rows-none sm:text-left sm:mx-0">
        <div
          className={"p-0 sm:grow sm:shrink sm:max-w-[223px] md:max-w-[350px]"}
        >
          <div className={"text-white opacity-50 font-bold tracking-[1px]"}>
            {"Designo Central Office"}
          </div>
          <div className={"text-white opacity-50 tracking-[1px]"}>
            {"3386 Wellington Street"}
          </div>
          <div className={"text-white opacity-50 tracking-[1px]"}>
            {"Toronto, Ontario M9C 3J5"}
          </div>
        </div>
        <div
          className={"p-0 sm:grow sm:shrink sm:max-w-[223px] md:max-w-[350px]"}
        >
          <div className={"text-white opacity-50 font-bold tracking-[1px]"}>
            {"Contact Us (Central Office)"}
          </div>
          <div className={"text-white opacity-50 tracking-[1px]"}>
            {"P: +1 253-863-8967"}
          </div>
          <div className={"text-white opacity-50 tracking-[1px]"}>
            {"M: contact@designo.co"}
          </div>
        </div>
        <div
          className={
            "p-0 inline-grid grid-flow-col grid-cols-[24px_24px_24px_24px_24px] mx-auto gap-4 sm:self-end sm:grow sm:shrink sm:justify-end"
          }
        >
          <div className={"icon-facebook"} />
          <div className={"icon-youtube"} />
          <div className={"icon-twitter"} />
          <div className={"icon-pinterest"} />
          <div className={"icon-instagram"} />
        </div>
      </div>
    </>
  );
};

export default Contact;
