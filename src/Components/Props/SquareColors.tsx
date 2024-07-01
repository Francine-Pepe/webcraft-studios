export function SquareColors(props: any) {
  const { data } = props;

  return (
    <div className="square-container">
      {data.map((item: { color: string; theme: string }, index: any) => (
        <button
          className="square"
          style={{ backgroundColor: item.color }}
          key={index}
          onClick={() => document.body.setAttribute("theme", item.theme)}
        ></button>
      ))}
    </div>
  );
}
