import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Grid from "./Props/Grid";
import { servicesCard } from "../data";

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function ParallaxEffect() {
  const parallax = useRef<IParallax>(null!);
  return (
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax ref={parallax} pages={1}>
        <ParallaxLayer
          // offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <Grid data={servicesCard} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
