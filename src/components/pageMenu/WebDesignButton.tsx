import { useNavigate } from "react-router-dom";
import { DesignoRoutes } from "../../utils/constants";
import PageMenuButton from "./PageMenuButton";

const WebDesignButton = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(DesignoRoutes.WebDesign);
  };
  return (
    <PageMenuButton
      title={"Web Design"}
      backgroundClass={
        "menu-pages-web-design-mobile sm:menu-pages-web-design-tablet lg:menu-pages-web-design-desktop"
      }
      backgroundHoverClass={
        "hover:menu-pages-web-design-mobile-hover sm:hover:menu-pages-web-design-tablet-hover lg:hover:menu-pages-web-design-desktop-hover"
      }
      onClick={onClick}
    />
  );
};

export default WebDesignButton;
