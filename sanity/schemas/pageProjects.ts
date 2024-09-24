import pageTabs from "./common/pageTabs"

export default {
  name: 'pageProjects',
  title: 'Projects Page',
  type: 'document',
  groups: [...pageTabs],
  fields: [
    {
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'heroHeadline',
      group: 'content',
    },
    {
      name: 'contentCopy',
      title: 'Content Copy',
      type: 'contentCopy',
      group: 'content',
    },
    {
      name: 'contentImage',
      title: 'Content Image',
      type: 'contentImage',
      group: 'content',
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }
  ],
  preview: {
    select: {
      title: 'heroHeadline',
      media: 'contentImage'
    }
  }
}
