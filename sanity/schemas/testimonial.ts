import { RuleType } from "../schemaTypes";
import { AiOutlineMessage } from "react-icons/ai";

export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  icon: AiOutlineMessage,
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      description: 'The testimonial quote',
      validation: (Rule: RuleType) => Rule.required()
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
    },
    {
      name: 'orderRank',
      title: 'Order Rank',
      type: 'string',
      hidden: true
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