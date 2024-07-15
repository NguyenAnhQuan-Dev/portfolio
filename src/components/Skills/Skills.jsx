import Container from "../common/Containner/Container";
import Skill from "./Skill";
import data from "../../data/data";

export default function Skills() {
  return (
    <Container>
      <div>
        <h2 className="text-3xl font-medium sm:text-4xl text-center">
          My Skill
          <hr className="h-[1px] w-full rounded bg-light opacity-40 my-5" />
        </h2>
        <div>
          {data.map((skill) => (
            <Skill
              key={skill.id}
              data={skill.dataOfSkill}
              title={skill.nameSkill}
            ></Skill>
          ))}
        </div>
      </div>
    </Container>
  );
}
