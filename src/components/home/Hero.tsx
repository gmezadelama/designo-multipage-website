import LightButton from "../buttons/LightButton";

const Hero = () => {
  return (
    <>
      <div
        className={
          "bg-peach h-[843px] bg-phone-hero-image-mobile bg-no-repeat sm:bg-phone-hero-image-tablet lg:bg-phone-hero-image-desktop pt-20 px-6 sm:pt-[60px] sm:px-[100px] lg:pt-[145px] lg:px-[95px] lg:h-[640px]"
        }
      >
        <div
          className={
            "text-center mb-6 sm:mb-[19px] lg:text-left lg:mb-10 grid grid-flow-row justify-center lg:justify-start"
          }
        >
          <h1
            className={
              "text-white text-[2rem] leading-9 sm:text-5xl mb-6 max-w-[400px] sm:max-w-[480px] sm:max-auto sm:inline-block"
            }
          >
            {"Award-winning custom designs and digital branding solutions"}
          </h1>
          <div
            className={
              "text-white text-[15px] leading-[25px] sm:text-[1rem] sm:leading-[26px] max-w-[380px] sm:max-w-[460px] sm:max-auto sm:inline-block lg:max-w-[450px]"
            }
          >
            {
              "With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services."
            }
          </div>
        </div>
        <div className={"text-center lg:text-left"}>
          <LightButton label={"Learn More"} />
        </div>
      </div>
    </>
  );
};

export default Hero;
