const AboutUsHeader = () => {
  return (
    <>
      <div
        className={
          "max-h-[715px] w-full grid grid-flow-row sm:max-h-[632px] lg:max-h-[480px] lg:grid-cols-[auto_auto] lg:grid-flow-col-dense"
        }
      >
        <div
          className={`about-hero-mobile sm:about-hero-tablet lg:about-hero-desktop bg-cover bg-no-repeat w-full h-[320px] lg:h-[480px] lg:w-[476px] sm:rounded-t-[15px] lg:rounded-t-none lg:rounded-r-[15px] `}
        />
        <div
          className={`bg-peach bg-pattern-about-hero-mobile sm:bg-pattern-about-hero-desktop bg-[top_-145px_right_20px] sm:bg-[top_-530px_left_-130px] lg:bg-bottom sm:bg-cover bg-no-repeat h-[395px] w-full justify-center text-center px-6 py-[80px] sm:h-[312px] sm:px-[58px] sm:py-[64px] lg:pl-[95px] lg:pr-[82px] lg:py-[135px] lg:h-[480px] lg:order-first  sm:rounded-b-[15px] lg:rounded-br-none lg:rounded-l-[15px]`}
        >
          <div
            className={
              "text-center text-white font-medium text-[32px] leading-9 mb-6 sm:text-5xl lg:text-left"
            }
          >
            {"About Us"}
          </div>
          <div
            className={
              "text-white text-center text-[15px] leading-[25px] mb-6 sm:text-[1rem] sm:leading-[26px] lg:text-left"
            }
          >
            {
              "Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences."
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsHeader;
