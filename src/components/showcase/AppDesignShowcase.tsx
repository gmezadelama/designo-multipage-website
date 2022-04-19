import Work from "./Work";
import Showcase from "./Showcase";

const AppDesignShowcase = () => (
  <Showcase>
    <Work
      imageSrc={"/assets/app-design/desktop/image-airfilter.jpg"}
      title={"AirFilter"}
      description={
        "Solving the problem of poor indoor air quality by filtering the air"
      }
    />
    <Work
      imageSrc={"/assets/app-design/desktop/image-eyecam.jpg"}
      title={"EyeCam"}
      description={
        "Product that lets you edit your favorite photos and videos at any time"
      }
    />
    <Work
      imageSrc={"/assets/app-design/desktop/image-faceit.jpg"}
      title={"FaceIt"}
      description={
        "Get to meet your favorite internet superstar with the faceit app"
      }
    />
    <Work
      imageSrc={"/assets/app-design/desktop/image-todo.jpg"}
      title={"ToDo"}
      description={
        "A todo app that features cloud sync with light and dark mode"
      }
    />
    <Work
      imageSrc={"/assets/app-design/desktop/image-loopstudios.jpg"}
      title={"LoopStudios"}
      description={"A VR experience app made for Loopstudios"}
    />
  </Showcase>
);

export default AppDesignShowcase;
