export interface IAboutUsSubSectionProps {
  imageClass: string;
  title: string;
  text1: string;
  text2: string;
  reverse?: boolean;
}

const AboutUsSubSection = ({
  imageClass,
  title,
  text1,
  text2,
  reverse,
}: IAboutUsSubSectionProps) => {
  const imageRadius = `rounded-t-[15px] ${
    !reverse
      ? "lg:rounded-tr-none lg:rounded-l-[15px]"
      : "lg:rounded-tl-none lg:rounded-r-[15px]"
  }`;
  const textRadius = `rounded-b-[15px] ${
    !reverse
      ? "lg:rounded-bl-none lg:rounded-r-[15px]"
      : "lg:rounded-br-none lg:rounded-l-[15px]"
  }`;
  const reverseStyle = !!reverse ? "lg:order-first" : "";
  return (
    <>
      <div
        className={
          "max-h-[865px] w-full grid grid-flow-row sm:max-h-[736px] lg:max-h-[640px] lg:grid-cols-[auto_auto] lg:grid-flow-col-dense"
        }
      >
        <div
          className={`${imageClass} bg-cover bg-no-repeat w-full h-[320px] lg:h-[640px] lg:w-[476px] ${imageRadius}`}
        />
        <div
          className={`bg-[#FDF3F0] bg-pattern-three-circles bg-cover bg-no-repeat h-[545px] w-full justify-center text-center px-6 py-[80px] sm:h-[416px] sm:px-[59px] sm:py-[68px] lg:px-[94px] lg:py-[154px] lg:h-[640px] ${reverseStyle} ${textRadius}`}
        >
          <div
            className={
              "text-center text-peach font-medium text-[32px] leading-9 mb-6 lg:text-left"
            }
          >
            {title}
          </div>
          <div
            className={
              "text-center text-[15px] leading-[25px] mb-6 lg:text-left"
            }
          >
            {text1}
          </div>
          <div
            className={"text-center text-[15px] leading-[25px] lg:text-left"}
          >
            {text2}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsSubSection;
