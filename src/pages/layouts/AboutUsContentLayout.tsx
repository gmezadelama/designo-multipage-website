import { MAX_WIDTH_CONTENT_STYLE } from "../../utils/constants";

export interface IAboutUsContentLayoutProps {
  children: JSX.Element[];
}

const AboutUsContentLayout = ({ children }: IAboutUsContentLayoutProps) => {
  const [aboutUsHeader, worldClassComponent, locations, realDealComponent] =
    children;
  return (
    <div
      className={`grid gap-0 mb-[96px] sm:gap-[120px] sm:mb-[120px] lg:gap-[160px] lg:mb-[160px] ${MAX_WIDTH_CONTENT_STYLE}`}
    >
      <section className={"p-0 m-0 sm:px-10 lg:px-[164px]"}>
        {aboutUsHeader}
      </section>
      <div className={"grid gap-[120px] sm:px-10 lg:px-[164px] lg:gap-[160px]"}>
        <section className={"p-0 m-0"}>{worldClassComponent}</section>
        <section className={"p-0 m-0"}>{locations}</section>
        <section className={"p-0 m-0"}>{realDealComponent}</section>
      </div>
    </div>
  );
};

export default AboutUsContentLayout;
