import LightButton from "../buttons/LightButton";

export interface IGetInTouchProps {}

const GetInTouch = (props: IGetInTouchProps) => {
  return (
    <div className={"h-[430px] md:h-[364px]"}>
      <div
        className={
          "h-[264px] relative bg-white px-[24px] sm:px-[39px] md:h-[220px] md:px-[60px] lg:px-[165px]"
        }
      >
        <div
          className={
            "h-[379px] w-full bg-peach bg-call-to-action bg-no-repeat getInTouchBg-mobile rounded-[15px] text-center justify-center text-white py-[57px] grid gap-8 sm:h-[350px] sm:getInTouchBg-tablet md:flex md:justify-between md:h-[292px] md:px-[72px] md:py-[72px] md:getInTouchBg-desktop lg:px-[95px]"
          }
        >
          <div className={"grid gap-4 md:flex-grow md:gap-2"}>
            <div
              className={
                " text-[32px] leading-9  text-white max-w-[210px]  inline-block mx-auto sm:max-w-[265px] sm:text-[2.5rem] sm:leading-10 md:text-left md:max-w-[268px] md:ml-0 "
              }
            >
              {"Let's talk about your project"}
            </div>
            <div
              className={
                " text-[15px] leading-[25px] text-white max-w-[290px] sm:max-w-[450px] sm:text-[1rem] sm:leading-[1.625rem] md:text-left md:max-w-[459px]"
              }
            >
              {
                "Ready to take it to the next level? Conctact us today and find out how our expertise can help your business grow."
              }
            </div>
          </div>
          <div className={"md:grow-0 md:py-[46px]"}>
            <LightButton label={"Get in touch"} />
          </div>
        </div>
      </div>
      <div className={"min-h-full bg-black"}></div>
    </div>
  );
};

export default GetInTouch;
