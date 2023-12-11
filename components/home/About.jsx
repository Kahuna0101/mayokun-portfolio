import { getAbouts } from "@/sanity/actions";
import AreaCard from "../shared/AreaCard";

const About = async () => {
  const abouts = await getAbouts();

  return (
    <section id="about">
      <div className="flex-app">
        <h2 className="head-text">
          Areas of <span>Expertise</span>
        </h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-8">
          {abouts.map((about) => (
           <AreaCard about={about} key={about.title}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
