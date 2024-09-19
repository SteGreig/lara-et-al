import { RuleType } from "../schemaTypes"

export default {
  name: 'pageHome',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'heroSlides',
      title: 'Hero Slides',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true
              },
              validation: (Rule: RuleType) => Rule.required()
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              validation: (Rule: RuleType) => Rule.max(150)
            },
            {
              name: 'projectLink',
              title: 'Project Link',
              type: 'reference',
              to: [{ type: 'project' }],
              description: 'Select a project to link this slide to (optional)',
            }
          ]
        }
      ]
    },
    {
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required()
    },
    {
      name: 'heroSubline',
      title: 'Hero Subline',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required()
    },
    {
      name: 'contentHeadline',
      title: 'Content Headline',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required()
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
      media: 'heroSlides.0.image'
    }
  }
}
