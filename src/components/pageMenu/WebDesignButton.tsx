import PageMenuButton from "./PageMenuButton";

export interface IWebDesignButtonProps {
  onClick?: () => void;
}

const WebDesignButton = (props: IWebDesignButtonProps) => (
  <PageMenuButton
    title={"Web Design"}
    backgroundClass={
      "menu-pages-web-design-mobile sm:menu-pages-web-design-tablet lg:menu-pages-web-design-desktop"
    }
    backgroundHoverClass={
      "hover:menu-pages-web-design-mobile-hover sm:hover:menu-pages-web-design-tablet-hover lg:hover:menu-pages-web-design-desktop-hover"
    }
    {...props}
  />
);

export default WebDesignButton;
