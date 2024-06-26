

export function SquareColors(props: any) {
  const { data } = props;
  return (
    <div className="square-container">
      {data.map((item: { color: string }, index: any) => (
        <div className="square" style={{ backgroundColor: item.color }}></div>
      ))}
    </div>
  );
}
