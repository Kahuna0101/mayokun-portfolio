import { getAbouts } from "@/sanity/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";

const About = async () => {
  const abouts = await getAbouts();

  return (
    <section id="about">
      <div className="flex-app">
        <h2 className="head-text">
          Areas of <span>Expertise</span>
        </h2>

        <div className="flex justify-center items-start flex-wrap mt-8">
          {abouts.map((about) => (
            <Card
              key={about.title}
              className="flex w-64 min-[2000px]:w-80 justify-start items-start flex-col m-6 rounded-t-xl transition-transform duration-500 transform hover:scale-110"
            >
              <Image
                src={about.image}
                alt={about.title}
                width={170}
                height={170}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full rounded-xl object-cover"
              />
              <CardHeader>
                <CardTitle>{about.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="p-text line-clamp-6">{about.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
