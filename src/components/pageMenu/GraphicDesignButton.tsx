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
    backgroundHoverClass={
      "hover:menu-pages-graphic-design-mobile-hover sm:hover:menu-pages-graphic-design-tablet-hover md:hover:menu-pages-graphic-design-desktop-hover"
    }
    {...props}
  />
);

export default GraphicDesignButton;
