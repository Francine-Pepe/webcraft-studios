import { NavLink } from "react-router-dom";
import Circle from "../../Icons/Circle";
import { SquareColors } from "../../Icons/SquareColors";
import { squareColorsYellow } from "../../data";
import { circleColorYellowGroup } from "../../data";

function Navigation(props: any) {
  const { data } = props;

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
        <SquareColors data={squareColorsYellow} />
      </ul>
    </nav>
  );
}

export default Navigation;
