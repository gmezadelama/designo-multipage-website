import Feature from "./Feature";
import FeaturesList from "./FeaturesList";

const GraphicDesignFeaturesList = () => (
  <FeaturesList>
    <Feature
      imageSrc={"/assets/graphic-design/desktop/image-change.jpg"}
      title={"Tim Brown"}
      description={
        "A book cover designed for Tim Brown's new release, 'Change'"
      }
    />
    <Feature
      imageSrc={"/assets/graphic-design/desktop/image-boxed-water.jpg"}
      title={"Boxed Water"}
      description={"A simple packaging concept made for Boxed Water"}
    />
    <Feature
      imageSrc={"/assets/graphic-design/desktop/image-science.jpg"}
      title={"Science!"}
      description={
        "A poster made in collaboration with the Federal Art Project"
      }
    />
  </FeaturesList>
);

export default GraphicDesignFeaturesList;
