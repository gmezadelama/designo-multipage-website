import { useNavigate } from "react-router-dom";
import {
  DesignoRoutes,
  MAX_WIDTH_CONTENT_STYLE_FOOTER,
} from "../../utils/constants";
import LightButton from "../buttons/LightButton";

const GetInTouch = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(DesignoRoutes.Contact);
  };
  return (
    <div className={"h-[430px] lg:h-[364px]"}>
      <div
        className={
          "h-[264px] relative bg-white px-[24px] sm:px-[39px] lg:h-[220px] lg:px-[165px]"
        }
      >
        <div
          className={`h-[379px] w-full bg-peach bg-call-to-action bg-no-repeat getInTouchBg-mobile rounded-[15px] text-center justify-center text-white py-[57px] grid gap-8 sm:h-[350px] sm:getInTouchBg-tablet lg:flex lg:justify-between lg:h-[292px] lg:py-[72px] lg:getInTouchBg-desktop lg:px-[95px]  ${MAX_WIDTH_CONTENT_STYLE_FOOTER}`}
        >
          <div className={"grid gap-4 lg:flex-grow lg:gap-2"}>
            <div
              className={
                " text-[32px] leading-9  text-white max-w-[210px]  inline-block mx-auto sm:max-w-[265px] sm:text-[2.5rem] sm:leading-10 lg:text-left lg:max-w-[268px] lg:ml-0 "
              }
            >
              {"Let's talk about your project"}
            </div>
            <div
              className={
                " text-[15px] leading-[25px] text-white max-w-[290px] sm:max-w-[450px] sm:text-[1rem] sm:leading-[1.625rem] lg:text-left lg:max-w-[459px]"
              }
            >
              {
                "Ready to take it to the next level? Conctact us today and find out how our expertise can help your business grow."
              }
            </div>
          </div>
          <div className={"lg:grow-0 lg:py-[46px]"}>
            <LightButton label={"Get in touch"} onClick={onClick} />
          </div>
        </div>
      </div>
      <div className={"min-h-full bg-black"}></div>
    </div>
  );
};

export default GetInTouch;
