import { groq } from "next-sanity";
import { client } from "./lib/client";

export const getAbouts = async () => {
  try {
    const about = await client.fetch(
      groq`*[_type == "abouts"]{
                _id,
                title,
                description,
                "image": imgUrl.asset->url
            }`
    );

    return about;
  } catch (error) {
    console.log(error);
  }
};

export const getSkills = async () => {
  try {
    const skills = await client.fetch(
      groq`*[_type == "skills"]{
                _id,
                name,
                bgColor,
                "image": icon.asset->url
            }`
    );

    return skills;
  } catch (error) {
    console.log(error);
  }
};

export const getExperiences = async () => {
  try {
    const experiences = await client.fetch(
      groq`*[_type == "experiences"]{
        _id,
        year,
        works
      }`
    );

    return experiences;
  } catch (error) {
    console.log(error);
  }
};

export const getWorks = async () => {
  try {
    const works = await client.fetch(
      groq`*[_type == "works"]{
        _id,
        title,
        "image": imgUrl.asset->url
    }`
    );

    return works;
  } catch (error) {
    console.log(error);
  }
};