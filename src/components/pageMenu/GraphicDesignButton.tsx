import React from "react";
import PageMenuButton from "./PageMenuButton";

export interface IGraphicDesignButtonProps {
  onClick?: () => void;
}

const GraphicDesignButton = (props: IGraphicDesignButtonProps) => (
  <PageMenuButton
    title={"Graphic Design"}
    backgroundClass={
      "menu-pages-graphic-design-mobile sm:menu-pages-graphic-design-tablet md:menu-pages-graphic-design-desktop"
    }
    {...props}
  />
);

export default GraphicDesignButton;
