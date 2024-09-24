import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'

import pages from './sanity/schemas/pages'
import schemaTypes from './sanity/schemas'

import { AiOutlineFile } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai"

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(["siteSettings", ...pages.map(p => p.name)])

export default defineConfig({
  name: 'default',
  title: 'Lara et al',
  apiVersion: "2024-09-17",
  projectId: '8iwtdl5j',
  dataset: 'production',
  useCdn: true,
  basePath: "/studio",

  plugins: [
    structureTool({
      icon: AiOutlineFile,
      structure: (S) =>
        S.list()
          .title("Content")
          .items([

            ...pages.map(p =>
              S.listItem()
              .title(p.title)
              .id(p.name)
              .icon(AiOutlineFile)
              .child(S.document().schemaType(p.name).documentId(p.name)),
            ),

            S.divider(),

            // Regular document types
            //S.documentTypeListItem("project").title("Projects"),

            // List out the rest of the document types, but filter out the config type
            ...S.documentTypeListItems()
            .filter((listItem) => !['siteSettings', 'media.tag', ...pages.map(p => p.name)].includes(listItem.getId() ?? '')),

            // Add a visual divider (optional)
            S.divider(),

            // Our singleton type has a list item with a custom child
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .icon(AiOutlineSetting)
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),

          ]),
    }),
    media(),
    //visionTool()
  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType))
      .filter(({ schemaType }) => schemaType !== 'media.tag'),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})