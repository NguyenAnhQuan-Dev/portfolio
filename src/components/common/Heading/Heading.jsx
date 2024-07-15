export default function Heading(props) {
  const { title } = props;
  return (
    <>
      <h2 className="text-3xl text-white_245 font-medium sm:text-4xl">
        {title}
        <hr className="h-[1px] w-full rounded bg-light opacity-40 my-5" />
      </h2>
    </>
  );
}
