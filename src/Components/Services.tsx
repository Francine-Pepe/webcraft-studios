import { pageDescriptions, servicesCard } from "../data";
import Grid from "./Props/Grid";
import TitleDescriptios from "./Props/TitleDescriptios";

function Services() {
  return (
    <div className="container" id="services">
      <div className="services-content">
        <div className="descriptions">
          <TitleDescriptios data={pageDescriptions} />
        </div>
        <div className="grid-row">
          <Grid data={servicesCard} />
        </div>
      </div>
    </div>
  );
}

export default Services;
