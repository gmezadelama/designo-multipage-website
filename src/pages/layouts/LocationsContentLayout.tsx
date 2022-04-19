import { MAX_WIDTH_CONTENT_STYLE } from "../../utils/constants";

export interface IAboutUsContentLayoutProps {
  children: JSX.Element;
}

const AboutUsContentLayout = ({ children }: IAboutUsContentLayoutProps) => {
  return (
    <div
      className={`sm:mb-[120px] lg:mb-[160px] ${MAX_WIDTH_CONTENT_STYLE} sm:px-10 lg:w-full lg:px-[165px]`}
    >
      {children}
    </div>
  );
};

export default AboutUsContentLayout;
