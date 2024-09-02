import { useState } from "react";
import { servicesCard } from "../../data";

function Modal(props: any) {
  const { data, handleClose, showModal } = props;

  return (
    <section className="modal-container modal">
      {servicesCard.map((item, index: any) => {
        return (
          <div className="modal-content" key={index}>
            <div
              show={showModal === item.id}
              {...props}
              className={showModal === item.id ? "modal-content" : ""}
            >
              <h1>{item.service}</h1>
              <p>{item.text}</p>
              <button
                onClick={() => {
                  handleClose();
                }}
              >
                Close
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Modal;
