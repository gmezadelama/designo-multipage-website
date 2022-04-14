import React from "react";
import AppDesignButton from "./AppDesignButton";
import GraphicDesignButton from "./GraphicDesignButton";
import PageMenuButton from "./PageMenuButton";

export interface IFullMenuProps {}

const FullMenu = (props: IFullMenuProps) => {
  return (
    <>
      <div
        className={
          "grid grid-rows-[1fr_2fr] gap-6 h-[798px] max-h-[798px] w-full sm:h-[649px] md:h-[640px] md:gap-[30px] md:grid-cols-[1fr_1fr]"
        }
      >
        <PageMenuButton
          title={"Web Design"}
          backgroundClass={
            "menu-pages-web-design-mobile sm:menu-pages-web-design-tablet md:menu-pages-web-design-desktop-large"
          }
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
