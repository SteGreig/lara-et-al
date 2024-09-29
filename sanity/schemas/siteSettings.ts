import { FiAtSign } from "react-icons/fi"
import { RuleType } from "../schemaTypes";

export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      title: 'Company Name',
      name: 'companyName',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required()
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      validation: (Rule: RuleType) => Rule.required().uri({
        allowRelative: false,
        scheme: ['http', 'https']
      })
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'email',
      validation: (Rule: RuleType) => Rule.required()
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required()
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      validation: (Rule: RuleType) => Rule.required()
    },
    {
      title: 'Socials',
      name: 'socials',
      type: 'array',
      of: [
        {
          type: "object",
          icon: FiAtSign,
          name: "social",
          fields: [
            {
              title: 'Platform',
              name: 'platform',
              type: 'string',
              validation: (Rule: RuleType) => Rule.required()
            },
            {
              title: 'URL',
              name: 'url',
              type: 'url',
              validation: (Rule: RuleType) => Rule.required().uri({
                allowRelative: false,
                scheme: ['http', 'https']
              })
            }
          ]
        }
      ]
    },
    {
      title: 'Default SEO / Share Settings',
      name: 'seo',
      type: 'object',
      fields: [
        {
          name: 'defaultMetaTitle',
          title: 'Default Meta Title',
          type: 'string',
          description: 'Title used for search engines and browsers - can and should be overridden on each page.',
          validation: (Rule: RuleType) => Rule.max(60).warning('Longer titles may be truncated by search engines')
        },
        {
          name: 'metaTitleSuffix',
          title: 'Meta Title Suffix',
          type: 'string',
          description: 'This will be added to the end of meta titles throughout the site.',
          validation: (Rule: RuleType) => Rule.required()
        },
        {
          name: 'defaultMetaDescription',
          title: 'Default Meta Description',
          type: 'text',
          description: 'Description for search engines - can and should be overridden on each page.',
          validation: (Rule: RuleType) => Rule.max(160).warning('Longer descriptions may be truncated by search engines')
        },
        {
          name: 'openGraphImage',
          title: 'Default Open Graph Social Image',
          type: 'image',
          description: 'Can be overridden on each page (these will be cropped to 1200x630)',
          options: {
            hotspot: true
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'companyName',
      media: 'logo'
    }
  }
};