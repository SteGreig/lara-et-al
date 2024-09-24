import { RuleType } from "../schemaTypes";

export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule: RuleType) => Rule.required()
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'clientType',
      title: 'Client Type',
      type: 'string',
    },
    {
      name: 'squareFootage',
      title: 'Square Footage',
      type: 'number',
      description: 'Enter the square footage of the project',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (Rule: RuleType) => Rule.required()
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'serviceName',
              title: 'Service Name',
              type: 'string',
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'clientType',
      media: 'mainImage'
    }
  }
}
