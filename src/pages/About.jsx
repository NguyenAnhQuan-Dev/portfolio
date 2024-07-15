import Skills from "../components/Skills/Skills";
import Container from "../components/common/Containner/Container";
import Content from "../components/common/Content/Content";
import Heading from "../components/common/Heading/Heading";
import DefaultLayout from "../layout/DefaultLayout";
export default function About() {
  return (
    <DefaultLayout>
      <Container>
        <div className="about h-max px-2 sm:px-0">
          <Heading title="About" />
          {/* ========= Introduce ======== */}
          <Content
            title="Who I am"
            content="Hello, I&#39;m Nguyen Anh Quan, but you can simply call me
                Horizon. I am a programmer who is always eager to accumulate
                practical experience and possesses a passion for constantly
                pushing the boundaries in the field of information technology."
          ></Content>
          {/* Introduction */}
          <Skills />
        </div>
      </Container>
    </DefaultLayout>
  );
}
