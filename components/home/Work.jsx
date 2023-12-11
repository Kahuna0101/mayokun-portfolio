import { Suspense } from "react";
import PhotoSlider from "../shared/PhotoSlider";

import { getWorks } from "@/sanity/actions";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";

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

        <div className="mt-10 flex justify-start">
          <Link
            href="#downloadCv"
            className="p-4 bg-secondary-color hover:bg-blue-700 rounded-e-xl text-slate-50"
          >
            See More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
