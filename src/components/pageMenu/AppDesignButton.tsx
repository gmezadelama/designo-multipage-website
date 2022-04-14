import React from "react";
import PageMenuButton from "./PageMenuButton";

export interface IAppDesignButtonProps {
  onClick?: () => void;
}

const AppDesignButton = (props: IAppDesignButtonProps) => (
  <PageMenuButton
    title={"App Design"}
    backgroundClass={
      "menu-pages-app-design-mobile sm:menu-pages-app-design-tablet md:menu-pages-app-design-desktop"
    }
    backgroundHoverClass={
      "hover:menu-pages-app-design-mobile-hover sm:hover:menu-pages-app-design-tablet-hover md:hover:menu-pages-app-design-desktop-hover"
    }
    {...props}
  />
);

export default AppDesignButton;
