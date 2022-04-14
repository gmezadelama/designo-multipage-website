import React from "react";
import PageMenuButton from "./PageMenuButton";

export interface IWebDesignButtonProps {
  onClick?: () => void;
}

const WebDesignButton = (props: IWebDesignButtonProps) => (
  <PageMenuButton
    title={"Web Design"}
    backgroundClass={
      "menu-pages-web-design-mobile sm:menu-pages-web-design-tablet md:menu-pages-web-design-desktop"
    }
    {...props}
  />
);

export default WebDesignButton;
