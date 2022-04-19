import Work from "./Work";
import Showcase from "./Showcase";

const GraphicDesignShowcase = () => (
  <Showcase>
    <Work
      imageSrc={"/assets/graphic-design/desktop/image-change.jpg"}
      title={"Tim Brown"}
      description={
        "A book cover designed for Tim Brown's new release, 'Change'"
      }
    />
    <Work
      imageSrc={"/assets/graphic-design/desktop/image-boxed-water.jpg"}
      title={"Boxed Water"}
      description={"A simple packaging concept made for Boxed Water"}
    />
    <Work
      imageSrc={"/assets/graphic-design/desktop/image-science.jpg"}
      title={"Science!"}
      description={
        "A poster made in collaboration with the Federal Art Project"
      }
    />
  </Showcase>
);

export default GraphicDesignShowcase;
