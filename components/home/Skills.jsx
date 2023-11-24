"use client";
import { getExperiences, getSkills } from "@/sanity/actions";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = async () => {
  const skills = await getSkills();
  const experiences = await getExperiences();

  return (
    <section id="skills">
      <div className="flex-app">
        <h2 className="head-text">
          <span className="text-secondary-color">Skills &</span> Experience
        </h2>

        <div className="w-[80%] mt-8 flex flex-row max-[900px]:w-full  max-[900px]:flex-col">
          <motion.div className="flex flex-1 flex-wrap justify-start items-start mr-20 max-[900px]:mr-0 max-[900px]:justify-center max-[900px]:items-center">
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="flex-col text-center m-4 transition-all duration-300 ease-in-out flex justify-center items-center"
                key={skill.name}
              >
                <div
                  className={`flex flex-col justify-center items-center w-28 h-28 rounded-[50%] bg-white hover:shadow-lg ${skill.bgColor}`}
                >
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={50}
                    height={50}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className=""
                  />
                  <p className="mt-2 font-medium">{skill.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="flex flex-1 justify-start items-start flex-col max-[900px]:mt-8">
            {experiences?.map((experience) => (
              <motion.div
                className="flex w-full flex-row justify-start items-start my-1"
                key={experience.year}
              >
                <div className="mr-12 max-[450px]:mr-4">
                  <p className="bold-text !text-secondary-color !font-extrabold">
                    {experience.year}
                  </p>
                </div>
                <motion.div className="flex-1">
                  {experience.works.map((work) => (
                    <>
                      <motion.div
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
                      </motion.div>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
