import { RuleType } from "../schemaTypes";
import { AiOutlineTeam } from "react-icons/ai";

export default {
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  icon: AiOutlineTeam,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required()
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required()
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      description: 'A short bio of the team member',
      //validation: (Rule: RuleType) => Rule.required()
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true
      },
      //validation: (Rule: RuleType) => Rule.required()
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
      name: 'orderRank',
      title: 'Order Rank',
      type: 'string',
      hidden: true
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'jobTitle',
      media: 'profileImage'
    }
  }
}
