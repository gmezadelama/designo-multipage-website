import { useNavigate } from "react-router-dom";
import { DesignoRoutes } from "../../utils/constants";
import PageMenuButton from "./PageMenuButton";

const GraphicDesignButton = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(DesignoRoutes.GraphicDesign);
  };
  return (
    <PageMenuButton
      title={"Graphic Design"}
      backgroundClass={
        "menu-pages-graphic-design-mobile sm:menu-pages-graphic-design-tablet lg:menu-pages-graphic-design-desktop"
      }
      backgroundHoverClass={
        "hover:menu-pages-graphic-design-mobile-hover sm:hover:menu-pages-graphic-design-tablet-hover lg:hover:menu-pages-graphic-design-desktop-hover"
      }
      onClick={onClick}
    />
  );
};

export default GraphicDesignButton;
