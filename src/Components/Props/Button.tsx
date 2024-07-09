function Button(props: any) {
  const { data } = props;
  return (
    <div className="button-container">
      {data.map(
        (item: { id: string; text: string; link: string }, index: any) => (
          <div key={index} id={item.id}>
            <a href={item.link}>
              <button>
                <h3>{item.text}</h3>
              </button>
            </a>
          </div>
        )
      )}
    </div>
  );
}

export default Button;
