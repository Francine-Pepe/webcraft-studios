import React, { useState } from "react";
import Modal from "./Modal";

function Grid(props: any) {
  const { data } = props;

  const [showModal, setShowModal] = useState(undefined);

  const handleClose = () => setShowModal(undefined);
  const handleShow = (id: any) => setShowModal(id);

  // const handleClose = () => {
  //   setShowModal(false);
  // };

  return (
    <section className="grid-container">
      {data.map(
        (item: {
          id: any;
          icon: any;
          service: string;
          description: any;
          text: string;
        }) => {
          return (
            <div className="grid effect2" id={item.id} key={item.id}>
              <div className="grid-item" onClick={() => handleShow(item.id)}>
                <div className="grid-image">{item.icon}</div>
                <div className="grid-text">
                  <div className="grid-text-title">
                    <h3>{item.service}</h3>
                  </div>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          );
        }
      )}

      {/* {showModal && <Modal handleClose={handleClose} />} */}
    </section>
  );
}

export default Grid;
