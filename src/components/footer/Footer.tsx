import CompanyMenu from "./CompanyMenuFooter";
import Contact from "./Contact";
import GetInTouch from "./GetInTouch";

const Header = () => {
  return (
    <>
      <GetInTouch />
      <div
        className={
          "bg-black px-[24px] sm:px-[39px] pb-16 sm:pb-20 lg:px-[165px]"
        }
      >
        <CompanyMenu />
        <Contact />
      </div>
    </>
  );
};

export default Header;
