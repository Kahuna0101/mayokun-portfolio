import { getExperiences, getSkills } from "@/sanity/actions";
import Image from "next/image";
import { MotionDiv } from "../shared/MotionDiv";

const Skills = async () => {
  const skills = await getSkills();
  const experiences = await getExperiences();

  const sortedExperiences = experiences.sort((a, b) => b.year - a.year);

  return (
    <section id="skills">
      <div className="flex-app">
        <h2 className="head-text">
          <span className="text-secondary-color">Skills &</span> Experience
        </h2>

        <div className="w-[80%] mt-8 flex flex-row max-[900px]:w-full  max-[900px]:flex-col">
          <div className="flex flex-1 flex-wrap justify-start items-start max-[900px]:mr-0 max-[900px]:justify-center max-[900px]:items-center">
            {skills.map((skill) => (
              <MotionDiv
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="flex-col overflow-hidden text-center m-4 transition-all duration-300 ease-in-out flex justify-center items-center w-28 h-28 rounded-[50%] bg-white hover:shadow-lg"
                key={skill.name}
              >
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={90}
                    height={50}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                  />
              </MotionDiv>
            ))}
          </div>

          <div className="flex flex-1 justify-start items-start flex-col max-[900px]:mt-8">
            {sortedExperiences?.map((experience) => (
              <div
                className="flex w-full flex-row justify-start items-start my-1"
                key={experience.year}
              >
                <div className="mr-12 max-[450px]:mr-4">
                  <p className="bold-text !text-secondary-color !font-extrabold">
                    {experience.year}
                  </p>
                </div>
                <div className="flex-1">
                  {experience.works.map((work) => (
                    <>
                      <MotionDiv
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-start items-start mb-4 cursor-pointer"
                        key={work.company}
                      >
                        <h4 className="bold-text !font-medium">
                          {work.position}
                        </h4>
                        <p className="p-text bold-text !text-secondary-color !text-xl">
                          {work.company}
                        </p>
                        <p className="p-text">{work.desc}</p>
                      </MotionDiv>
                    </>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
