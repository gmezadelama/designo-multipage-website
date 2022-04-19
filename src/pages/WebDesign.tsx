import WebDesignShowcase from "../components/showcase/WebDesignShowcase";
import AppDesignButton from "../components/pageMenu/AppDesignButton";
import GraphicDesignButton from "../components/pageMenu/GraphicDesignButton";
import PartialMenuLayout from "../components/pageMenu/PartialMenuLayout";
import Title, { DesignPagesEnum } from "../components/title/Title";
import GeneralLayout from "./layouts/GeneralLayout";
import DesignPagesContentLayout from "./layouts/DesignPagesContentLayout";

const WebDesign = () => {
  return (
    <>
      <GeneralLayout>
        <DesignPagesContentLayout>
          <Title page={DesignPagesEnum.Web} />
          <WebDesignShowcase />
          <PartialMenuLayout>
            <AppDesignButton />
            <GraphicDesignButton />
          </PartialMenuLayout>
        </DesignPagesContentLayout>
      </GeneralLayout>
    </>
  );
};

export default WebDesign;
