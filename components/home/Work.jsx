import { Suspense } from "react";
import PhotoSlider from "../shared/PhotoSlider";

import { getWorks } from "@/sanity/actions";
import { Skeleton } from "../ui/skeleton";

const Work = async () => {
  const works = await getWorks();

  return (
    <section id="work">
      <div className="mt-10">
        <h2 className="head-text mb-8">
          Accomplished <span className="text-secondary-color">Projects</span>
        </h2>

        <Suspense fallback={<Skeleton />}>
          <PhotoSlider works={works} />
        </Suspense>
        
      </div>
    </section>
  );
};

export default Work;
