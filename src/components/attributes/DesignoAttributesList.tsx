import DesignoAttribute from "./DesignoAttribute";

const DesignoAttributesList = () => {
  return (
    <>
      <div className="grid gap-20 mx-auto sm:gap-8 lg:gap-[30px] lg:grid-cols-3">
        <DesignoAttribute
          title={"Passionate"}
          description={
            "Each project starts with an in-depth brand research to ensure we only create products that server a purpose. We merge art, design, and technology into exciting new solution."
          }
          imageClass={"attribute-passionate"}
          imageSrc={"/assets/home/desktop/illustration-passionate.svg"}
        />
        <DesignoAttribute
          title={"Resourceful"}
          description={
            "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs."
          }
          imageClass={"attribute-resourceful"}
          imageSrc={"/assets/home/desktop/illustration-resourceful.svg"}
        />
        <DesignoAttribute
          title={"Friendly"}
          description={
            "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
          }
          imageClass={"attribute-friendly"}
          imageSrc={"/assets/home/desktop/illustration-friendly.svg"}
        />
      </div>
    </>
  );
};

export default DesignoAttributesList;
