import { RuleType } from "@/sanity/schemaTypes"

export default {
  title: 'SEO / Share Settings',
  name: 'seo',
  type: 'object',
  description: 'Custom manual overrides for certain SEO fields.',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title used for search engines and browsers.',
      validation: (Rule: RuleType) => Rule.max(50).warning('Longer titles may be truncated by search engines')
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'Description for search engines.',
      validation: (Rule: RuleType) => Rule.max(150).warning('Longer descriptions may be truncated by search engines')
    },
    {
      name: 'openGraphImage',
      title: 'Open Graph Social Image',
      type: 'image',
      description: 'Share graphics will be cropped to 1200x630',
      options: {
        hotspot: true
      }
    }
  ]
}