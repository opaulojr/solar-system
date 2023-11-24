type TitleProps = {
  headline: string
};

function Title({ headline }: TitleProps) {
  return (
    <div className="title-component">
      <h2 className="title-component">{headline}</h2>
    </div>
  );
}

export default Title;
