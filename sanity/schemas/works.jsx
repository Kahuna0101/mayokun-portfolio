const schema = {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        validation: Rule => Rule.required(),
        options: {
          hotspot: true,
        },
      },
    ],
  };

  export default schema;