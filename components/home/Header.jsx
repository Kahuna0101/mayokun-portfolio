import Image from "next/image";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MotionDiv } from "../shared/MotionDiv";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <section id="home">
      <div className="flex-app lg:flex-row bg-hero bg-cover bg-repeat bg-center">
      <MotionDiv
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex-col w-full mt-10 justify-center items-start"
      >

          <Card className="text-center rounded-[15px] w-auto shadow-lg">
            <CardHeader>
              <CardTitle className="text-[2.5rem] min-[2000px]:text-[5rem]">👋🏾</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="p-text !text-center">Hello, I am</p>
              <h2 className="font-semibold md:font-extrabold capitalize text-3xl md:text-5xl text-slate-600">
                Arch. mayokun
              </h2>
            </CardContent>
          </Card>

          <Card className=" mt-7 rounded-[15px] w-auto shadow-lg">
            <CardHeader>
              <CardTitle className="font-semibold md:font-extrabold capitalize text-3xl md:text-5xl text-slate-600">Personal Summary</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
            <p className="p-text">
              A humble, resourceful, inspiring and motivational graduate architect who has a 
              commercial approach to creative design and a high degree of professional competence. 
              Adeniyi Mayokun is able to work effectively in pressurized situations with little or
              no supervision and can be relied upon to deliver, irrespective of circumstances.
            </p>
            </CardContent>
          </Card>
      </MotionDiv>

      <MotionDiv
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex-1 justify-end items-end h-full relative"
      >
        <div className="w-[23rem] md:w-full h-[45rem] md:h-[55rem] relative">
          <Image
            src="/profile.png"
            alt="profile"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full object-contain z-[1]"
          />
        </div>

        <Image
          width={40}
          height={40}
          src="/circle.svg"
          alt="profile_circle"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute left-0 right-0 bottom-0 z-0 w-full h-[90%]"
        />
      </MotionDiv>

      <MotionDiv
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="flex-0.75 hidden lg:flex flex-col justify-evenly items-start h-full ml-4"
      >
        {[
          { src: "/autocad.png", size: "w-24 h-24" },
          { src: "/autodesk.png", size: "m-4 w-40 h-40" },
          { src: "/revit.png", size: "w-16 h-16" },
        ].map((circle, index) => (
          <div
            key={circle.size}
            className={`rounded-full bg-white shadow-lg p-4 ${circle.size}`}
          >
            <Image
              src={circle.src}
              alt={`circle-${index}`}
              width={150}
              height={80}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
        ))}
      </MotionDiv>
      </div>
    </section>
  );
};

export default Header;
