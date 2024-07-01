import Navbar from "./Navbar";
import Drawer from "./Drawer";
import Video from "./Props/Video";
import { homeText } from "../data";
import Text from "../Components/Props/Text";

function Home() {
  return (
    <section className="container" id="home">
      <Drawer />
      <Navbar />
      <Video />
      <div className="home-text-container">
        <Text data={homeText} />
      </div>
    </section>
  );
}

export default Home;
