import { useNavigate } from "react-router-dom";
import { DesignoRoutes } from "../../utils/constants";
import PageMenuButton from "./PageMenuButton";

const AppDesignButton = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(DesignoRoutes.AppDesign);
  };
  return (
    <PageMenuButton
      title={"App Design"}
      backgroundClass={
        "menu-pages-app-design-mobile sm:menu-pages-app-design-tablet lg:menu-pages-app-design-desktop"
      }
      backgroundHoverClass={
        "hover:menu-pages-app-design-mobile-hover sm:hover:menu-pages-app-design-tablet-hover lg:hover:menu-pages-app-design-desktop-hover"
      }
      onClick={onClick}
    />
  );
};

export default AppDesignButton;
