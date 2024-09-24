import { RuleType } from "../schemaTypes"
import { AiOutlineUnorderedList } from "react-icons/ai";

export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  icon: AiOutlineUnorderedList,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: RuleType) => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule: RuleType) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}
