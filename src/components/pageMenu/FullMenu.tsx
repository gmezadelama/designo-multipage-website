import { useNavigate } from "react-router-dom";
import { DesignoRoutes } from "../../utils/constants";
import AppDesignButton from "./AppDesignButton";
import GraphicDesignButton from "./GraphicDesignButton";
import PageMenuButton from "./PageMenuButton";

export interface IFullMenuProps {}

const FullMenu = (props: IFullMenuProps) => {
  const navigate = useNavigate();
  const onClickWebDesign = () => {
    navigate(DesignoRoutes.WebDesign);
  };
  return (
    <>
      <div
        className={
          "grid grid-rows-[1fr_2fr] gap-6 h-[798px] max-h-[798px] w-full sm:h-[649px] lg:h-[640px] lg:gap-[30px] lg:grid-cols-[1fr_1fr]"
        }
      >
        <PageMenuButton
          title={"Web Design"}
          backgroundClass={
            "menu-pages-web-design-mobile sm:menu-pages-web-design-tablet lg:menu-pages-web-design-desktop-large"
          }
          backgroundHoverClass={
            "hover:menu-pages-web-design-mobile-hover sm:hover:menu-pages-web-design-tablet-hover lg:hover:menu-pages-web-design-desktop-large-hover"
          }
          onClick={onClickWebDesign}
        />
        <div className={"grid gap-6"}>
          <AppDesignButton />
          <GraphicDesignButton />
        </div>
      </div>
    </>
  );
};

export default FullMenu;
