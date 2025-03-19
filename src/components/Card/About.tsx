interface props {
  style: string;
}

export default function About({ style }: props) {
  return (
    <div className={`${style} flex`}>
      <div>test</div>
    </div>
  );
}
