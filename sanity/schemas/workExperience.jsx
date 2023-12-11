const schema = {
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  fields: [
    { name: "position", 
      title: "Position", 
      type: "string",
      require,
      validation: Rule => Rule.required()
    },
    {
      name: "company",
      title: "Company",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "desc",
      title: "Desc",
      type: "string",
      validation: Rule => Rule.required()
    }
  ],
};

export default schema;