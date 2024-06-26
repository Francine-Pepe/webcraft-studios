import React from "react";

function Circle(props: any) {
  const { data } = props;
  return (
    <div className="circle-container">
      {Array.from({ length: 3 }).map((_, index: any) => (
        <div key={index}>
          {data.map((item: { color: string }, index: any) => (
            <div
              className="circle"
              key={index}
              style={{ backgroundColor: item.color }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Circle;
