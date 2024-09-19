import { RuleType } from "@/sanity/schemaTypes";

export default {
  name: 'contentImage',
  title: 'Content Image',
  type: 'image',
  options: {
    hotspot: true
  },
  validation: (Rule: RuleType) => Rule.required()
}