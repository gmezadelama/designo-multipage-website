import { MAX_WIDTH_CONTENT_STYLE_FOOTER } from "../../utils/constants";
import CompanyMenu from "./CompanyMenuFooter";
import Contact from "./Contact";
import GetInTouch from "./GetInTouch";

export interface IFooterProps {
  hideGetInTouch?: boolean;
  disableClickHome?: boolean;
}

const Footer = ({ hideGetInTouch, disableClickHome }: IFooterProps) => {
  const getInTouchPaddingTop = !!hideGetInTouch ? "pt-20 sm:pt-[72px]" : "";
  return (
    <>
      {!hideGetInTouch && <GetInTouch />}
      <div
        className={`bg-black px-[24px] sm:px-[39px] pb-16 sm:pb-20 lg:px-[165px] ${getInTouchPaddingTop}`}
      >
        <div className={`${MAX_WIDTH_CONTENT_STYLE_FOOTER}`}>
          <CompanyMenu disableClickHome={disableClickHome} />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Footer;
