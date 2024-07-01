import Circle from "./Circle";
import { circleColorYellowGroup } from "../../data";
import { useState } from "react";

function Navigation(props: any) {
  const { data } = props;

  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive((isActive) => !isActive);
  }

  return (
    <nav className="navigation">
      <ul>
        {data.map(
          (item: { id: any; name: string; link: string }, index: any) => (
            <div id={item.id}>
              <li key={index}>
                <a href={item.link} id={item.id}>
                  {item.name}
                  <Circle data={circleColorYellowGroup} />
                </a>
              </li>
            </div>
          )
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
