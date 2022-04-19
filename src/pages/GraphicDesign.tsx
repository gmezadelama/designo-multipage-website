import GraphicDesignShowcase from "../components/showcase/GraphicDesignShowcase";
import AppDesignButton from "../components/pageMenu/AppDesignButton";
import WebDesignButton from "../components/pageMenu/WebDesignButton";
import PartialMenuLayout from "../components/pageMenu/PartialMenuLayout";
import Title, { DesignPagesEnum } from "../components/title/Title";
import GeneralLayout from "./layouts/GeneralLayout";
import DesignPagesContentLayout from "./layouts/DesignPagesContentLayout";

const GraphicDesign = () => {
  return (
    <>
      <GeneralLayout>
        <DesignPagesContentLayout>
          <Title page={DesignPagesEnum.Graphic} />
          <GraphicDesignShowcase />
          <PartialMenuLayout>
            <AppDesignButton />
            <WebDesignButton />
          </PartialMenuLayout>
        </DesignPagesContentLayout>
      </GeneralLayout>
    </>
  );
};

export default GraphicDesign;
