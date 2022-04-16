export enum DesignPagesEnum {
  Web = "web",
  App = "app",
  Graphic = "graphic",
}

const PageData = {
  [DesignPagesEnum.Web]: {
    title: "Web Design",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    desktopBg: "lg:bg-intro-web",
    desktopBgPosition: "lg:webTitleBg-desktop",
  },
  [DesignPagesEnum.App]: {
    title: "App Design",
    description:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingerprints.",
    desktopBg: "lg:bg-intro-app",
    desktopBgPosition: "lg:appTitleBg-desktop",
  },
  [DesignPagesEnum.Graphic]: {
    title: "Graphic Design",
    description:
      "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    desktopBg: "lg:bg-intro-graphic",
    desktopBgPosition: "lg:graphicTitleBg-desktop",
  },
};

export interface ITitleProps {
  page: DesignPagesEnum;
}

const Title = (props: ITitleProps) => {
  const { title, description, desktopBg, desktopBgPosition } =
    PageData[props.page];
  return (
    <div
      className={`bg-peach bg-intro-design-pages-mobile bg-no-repeat titleBg-mobile rounded-[15px] max-h-[320px] py-[105px] px-6 grid gap-6 text-center justify-center sm:bg-intro-design-pages-tablet sm:titleBg-tablet sm:max-h-[252px] sm:py-16 ${desktopBg} ${desktopBgPosition} `}
    >
      <h1 className={"text-white text-[32px] leading-9 sm:text-5xl"}>
        {title}
      </h1>
      <div
        className={
          "text-white text-[15px] leading-[25px] max-w-[327px] sm:text-[1rem] sm:leading-[1.625rem] sm:max-w-[400px]"
        }
      >
        {description}
      </div>
    </div>
  );
};

export default Title;
