import React, { useContext } from "react";
import HomeIcon from "./HomeIcon";
import ProffesionalIcon from "./ProffesionalIcon";
import Button from "../../Button/Button";
import { Context } from "../../Context/Context";

function Step1() {
  const { state, setState } = useContext(Context);
  const list = [
    {
      title: "Homeowner",
      icon: <HomeIcon />,
      id: 1,
    },
    {
      title: "Professional",
      desc: "I offer home improvement services or sell home products.",
      icon: <ProffesionalIcon />,
      id: 2,
    },
  ];
  const handleClick = (name) => {
    setState({
      ...state,
      describe: name,
    });
  };
  return (
    <div>
      <h1>Which describes you best?</h1>

      <div className="list">
        {list.map((item) => (
          <div
            onClick={() => handleClick(item.title)}
            className={
              state.describe === item.title ? "list-item active" : "list-item"
            }
            key={item.id}
          >
            {item.icon}
            <div>
              <h2>{item.title}</h2>
              {item.desc && <p>{item.desc}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="btns">
        <Button type="next" arrow disabled={state.describe === ""}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Step1;
