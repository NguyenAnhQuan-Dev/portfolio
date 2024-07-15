export default function Content(props) {
  const { title, content } = props;
  return (
    <div>
      <div>
        <h3 className="text-2xl mb-2">{title}</h3>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
}
