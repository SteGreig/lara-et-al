import { RuleType } from "@/sanity/schemaTypes"
import pageTabs from "./pageTabs"

export default {
  type: 'document',
  //__experimental_formPreviewTitle: false,
  groups: [...pageTabs],
  fields: [
    {
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
      group: 'content',
    },
    {
      name: 'contentCopy',
      title: 'Content Copy',
      type: 'array',
      of: [{ type: 'block' }],
      //validation: (Rule: RuleType) => Rule.required(),
      group: 'content',
    },
    {
      name: 'contentImage',
      title: 'Content Image',
      type: 'image',
      options: {
        hotspot: true
      },
      //validation: (Rule: RuleType) => Rule.required(),
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
