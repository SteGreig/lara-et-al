import { RuleType } from "@/sanity/schemaTypes"

export default {
  name: 'contentCopy',
  title: 'Content Copy',
  type: 'array',
  of: [{ type: 'block' }],
  validation: (Rule: RuleType) => Rule.required()
}