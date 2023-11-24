import PhotoSlider from "../shared/PhotoSlider";

import { getWorks } from "@/sanity/actions";

const Work = async () => {
  const works = await getWorks();

  return (
    <section id="work">
      <div className="mt-10">
        <h2 className="head-text mb-8">
          Accomplished <span className="text-secondary-color">Projects</span>
        </h2>

        <PhotoSlider works={works} />
      </div>
    </section>
  );
};

export default Work;
