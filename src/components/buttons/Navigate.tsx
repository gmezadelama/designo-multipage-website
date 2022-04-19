import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LightButton from "./LightButton";

const Navigate = () => {
  const [path, setPath] = useState<string>("/");
  const navigate = useNavigate();
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPath(e.target.value);
  };
  const onClick = () => {
    navigate(path);
  };
  return (
    <div className={"my-10"}>
      <div>
        <select onChange={onChange}>
          <option value={"/"}>{"Home"}</option>
          <option value={"/web"}>{"WebDesign"}</option>
          <option value={"/app"}>{"AppDesign"}</option>
          <option value={"/graphic"}>{"Graphic"}</option>
          <option value={"/about"}>{"AboutUs"}</option>
          <option value={"/locations"}>{"Locations"}</option>
          <option value={"/contact"}>{"Contact"}</option>
        </select>
      </div>
      <div>
        <LightButton label={"GoTo"} onClick={onClick} />
      </div>
    </div>
  );
};

export default Navigate;
