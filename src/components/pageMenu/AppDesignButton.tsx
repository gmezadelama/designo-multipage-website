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
    {...props}
  />
);

export default AppDesignButton;
