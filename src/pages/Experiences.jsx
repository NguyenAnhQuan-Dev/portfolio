import Heading from "../components/common/Heading/Heading";
import Container from "../components/common/Containner/Container";
import DefaultLayout from "../layout/DefaultLayout";
import logoSGU from "../assets/logo_sgu.jpg";
export default function Experiences() {
  return (
    <DefaultLayout>
      <Container>
        <Heading title="Experiences"></Heading>
        <h2 className="text-3xl font-medium sm:text-4xl text-center mt-[100px]">
          Education
          <hr className="h-[1px] w-full rounded bg-light opacity-40 my-5" />
        </h2>
        <ul className="flex flex-col items-center gap-5">
          <li className="bg-white rounded-3xl overflow-hidden w-full h-max flex flex-col justify-between items-center p-5">
            <div className="w-[250px] h-[250px] rounded-[50%]">
              <img
                src={logoSGU}
                alt="logo_sgu"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-black text-2xl font-bold text-center">
              Study at Sai Gon University
            </p>
            <p className="text-black text-sm">Time: 10/2023 - Present</p>
            <p className="text-black text-sm">Major: Infomation Technology</p>
          </li>
        </ul>
      </Container>
    </DefaultLayout>
  );
}
