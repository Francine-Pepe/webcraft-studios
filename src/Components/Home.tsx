import Navbar from "./Navbar";
import Drawer from "./Drawer";
import Video from "./Props/Video";
import { buttonHome, homeText } from "../data";
import Text from "../Components/Props/Text";
import Button from "./Props/Button";

function Home() {
  return (
    <section className="home-container container" id="home">
      <Navbar />
      <Video />
      <div className="home-text-container">
        <div className="home-main-content">
          <Drawer />
          <div className="home-button">
            <Text data={homeText} />
            <Button data={buttonHome} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
