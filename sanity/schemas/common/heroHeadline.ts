import { RuleType } from "@/sanity/schemaTypes";

export default {
  name: 'heroHeadline',
  title: 'Hero Headline',
  type: 'string',
  validation: (Rule: RuleType) => Rule.required()
}