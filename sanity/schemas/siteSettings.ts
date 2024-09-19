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
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
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
      type: 'text',
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
  ],
  preview: {
    select: {
      title: 'companyName',
      media: 'logo'
    }
  }
};