export default function Skill(props) {
  const { title, data } = props;
  return (
    <>
      <div className=" bg-white p-4 rounded-3xl mb-10">
        <h2 className="text-black text-center text-2xl mb-5 font-black">
          {title}
        </h2>
        <ul className="flex justify-center flex-wrap items-center gap-7">
          {data.map((item) => (
            <li
              key={item.id}
              className="flex justify-center items-center flex-col gap-2"
            >
              <div className=" text-black text-4xl">{item.icon}</div>
              <p className="text-black text-[18px]">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
