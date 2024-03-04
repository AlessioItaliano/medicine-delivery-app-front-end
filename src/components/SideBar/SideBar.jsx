import { useDispatch } from "react-redux";
import { getMedicinesByType } from "../../redux/medicines/operation";
import Button from "components/Button";
import * as s from "./SideBar.styled";

const SideBar = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (type) => {
    await dispatch(getMedicinesByType(type));
  };

  return (
    <s.Aside>
      <s.Title>Types of medications:</s.Title>
      <s.List>
        <s.Item>
          <Button
            type={"button"}
            name={"Gel"}
            func={() => handleSubmit("gel")}
          />
        </s.Item>
        <s.Item>
          <Button
            type={"button"}
            name={"Ointment"}
            func={() => handleSubmit("ointment")}
          />
        </s.Item>
        <s.Item>
          <Button
            type={"button"}
            name={"Syrup"}
            func={() => handleSubmit("syrup")}
          />
        </s.Item>
        <s.Item>
          <Button
            type={"button"}
            name={"Extract"}
            func={() => handleSubmit("extract")}
          />
        </s.Item>
        <s.Item>
          <Button
            type={"button"}
            name={"Elixir"}
            func={() => handleSubmit("elixir")}
          />
        </s.Item>
        <s.Item>
          <Button
            type={"button"}
            name={"Emulsion"}
            func={() => handleSubmit("emulsion")}
          />
        </s.Item>
        <s.Item>
          <Button
            type={"button"}
            name={"Decoction"}
            func={() => handleSubmit("decoction")}
          />
        </s.Item>
      </s.List>
    </s.Aside>
  );
};

export default SideBar;
