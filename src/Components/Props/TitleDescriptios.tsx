import React from "react";
import CardsImage from "./CardsImage";
import ServicesBackground from "../../Assets/services_background.png";

function TitleDescriptios(props: any) {
  const { data } = props;
  return (
    <section className="title-description-container">
      {data.map(
        (
          item: { title: string; description: string; image: string },
          index: any
        ) => (
          <div key={index}>
            <div className="grid-text-title">
              <h2>{item.title}</h2>
            </div>
            <p className="description-container">{item.description}</p>
          </div>
        )
      )}
      <div className="service-image">
        <CardsImage data={ServicesBackground} />
      </div>
    </section>
  );
}

export default TitleDescriptios;
