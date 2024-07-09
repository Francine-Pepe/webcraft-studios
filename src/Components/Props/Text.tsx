
function Text(props: any) {
  const { data } = props;
  return (
    <section className="centered-text">
      {data.map((item: { text: string }, index: any) => (
        <div key={index}>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default Text;
