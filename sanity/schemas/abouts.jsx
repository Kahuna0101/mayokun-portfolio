const schema = {
  name: 'abouts',
  title: 'Abouts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      require,
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
    },
  ],
}

export default schema;