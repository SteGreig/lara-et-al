
export default {
  name: 'pageTeam',
  title: 'Team Page',
  type: 'document',
  fields: [
    {
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'heroHeadline'
    },
    {
      name: 'contentCopy',
      title: 'Content Copy',
      type: 'contentCopy'
    },
    {
      name: 'contentImage',
      title: 'Content Image',
      type: 'contentImage'
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'heroHeadline',
      media: 'contentImage'
    }
  }
}
