import React from "react";
import DesignoAttribute from "./DesignoAttribute";

const DesignoAttributesList = () => {
  return (
    <>
      <div className="grid gap-20 mx-auto sm:gap-8 md:gap-[30px] md:grid-cols-3">
        <DesignoAttribute
          title={"Passionate"}
          description={
            "Each project starts with an in-depth brand research to ensure we only create products that server a purpose. We merge art, design, and technology into exciting new solution."
          }
          imageClass={"attribute-passionate"}
        />
        <DesignoAttribute
          title={"Resourceful"}
          description={
            "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs."
          }
          imageClass={"attribute-resourceful"}
        />
        <DesignoAttribute
          title={"Friendly"}
          description={
            "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
          }
          imageClass={"attribute-friendly"}
        />
      </div>
    </>
  );
};

export default DesignoAttributesList;
