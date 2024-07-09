import React from "react";

function LanguageSwitcher(props: any) {
  const { data } = props;
  return (
    <section className="language-switcher-container">
      <div  className="language-content">
        {data.map((item: { id: any; name: string }, index: any) => (
          <button key={index} className="language-button">
            <h4>{item.name} | </h4>
          </button>
        ))}
      </div>
    </section>
  );
}

export default LanguageSwitcher;
