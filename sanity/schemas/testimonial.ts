import { RuleType } from "../schemaTypes";

export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      description: 'The testimonial quote',
      validation: (Rule: RuleType) => Rule.required().min(10).max(300)
    },
    {
      name: 'person',
      title: 'Person',
      type: 'string',
      description: 'The name of the person who said the quote',
      validation: (Rule: RuleType) => Rule.required()
    },
    {
      name: 'detail',
      title: 'Detail',
      type: 'string',
      description: 'Additional information about the person (e.g., location, job title)',
      validation: (Rule: RuleType) => Rule
    }
  ],
  preview: {
    select: {
      title: 'person',
      subtitle: 'detail',
      description: 'quote'
    }
  }
}