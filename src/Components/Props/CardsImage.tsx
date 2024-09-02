import React from "react";

function CardsImage(props: any) {
  const { data } = props;
  return (
    <div className="service-icon">
      <div className="service-icon">
        <img src={data} alt="" />
      </div>
    </div>
  );
}

export default CardsImage;
