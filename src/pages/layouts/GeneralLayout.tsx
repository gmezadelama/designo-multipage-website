import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

export interface IGeneralLayout {
  children: JSX.Element;
  disableClickHome?: boolean;
  hideGetInTouch?: boolean;
}

const GeneralLayout = ({
  children,
  disableClickHome,
  hideGetInTouch,
}: IGeneralLayout) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const onToggleMenu = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };
  const overflowMobileStyle = isMenuOpen ? "fixed sm:static" : "";
  return (
    <div
      className={`grid grid-rows-[96px_1fr] sm:grid-rows-[155px_auto] max-w-[100vw] ${overflowMobileStyle}`}
    >
      <header className={"p-0 m-0"}>
        <Header
          disableClickHome={disableClickHome}
          onToggleMenu={onToggleMenu}
        />
      </header>
      {children}
      <footer className={"p-0 m-0 "}>
        <Footer
          disableClickHome={disableClickHome}
          hideGetInTouch={hideGetInTouch}
        />
      </footer>
    </div>
  );
};

export default GeneralLayout;
