import Container from "../components/common/Containner/Container";
import Heading from "../components/common/Heading/Heading";
import DefaultLayout from "../layout/DefaultLayout";
import Content from "../components/common/Content/Content";
import BannerProject1 from "../assets/project1.png";
export default function Project() {
  const para = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Voluptates nostrum, alias optio maiores ab architecto eveniet,
  unde animi in adipisci recusandae deserunt at provident aliquid
  similique explicabo minus dolor soluta!`;
  return (
    <DefaultLayout>
      <Container>
        <Heading title="Projects"></Heading>
        <ul className="">
          <li className="flex flex-col sm:justify-between sm:flex-row relative gap-3">
            <div className="flex flex-col gap-4">
              <Content title="Project 1" content={para}></Content>
              <a href="#" target="_blank" className="">
                Link github
              </a>
            </div>
            <div className="h-full">
              <img
                src={BannerProject1}
                alt="banner-project"
                className="h-full w-full object-cover"
              />
            </div>
            <hr className="h-[2px] w-full rounded bg-light opacity-40 absolute bottom-[-30px]" />
          </li>
        </ul>
      </Container>
    </DefaultLayout>
  );
}
