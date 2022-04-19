import AppDesignShowcase from "../components/showcase/AppDesignShowcase";
import WebDesignButton from "../components/pageMenu/WebDesignButton";
import GraphicDesignButton from "../components/pageMenu/GraphicDesignButton";
import PartialMenuLayout from "../components/pageMenu/PartialMenuLayout";
import Title, { DesignPagesEnum } from "../components/title/Title";
import GeneralLayout from "./layouts/GeneralLayout";
import DesignPagesContentLayout from "./layouts/DesignPagesContentLayout";

const AppDesign = () => {
  return (
    <>
      <GeneralLayout>
        <DesignPagesContentLayout>
          <Title page={DesignPagesEnum.App} />
          <AppDesignShowcase />
          <PartialMenuLayout>
            <WebDesignButton />
            <GraphicDesignButton />
          </PartialMenuLayout>
        </DesignPagesContentLayout>
      </GeneralLayout>
    </>
  );
};

export default AppDesign;
