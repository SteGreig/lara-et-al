import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import schemaTypes from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'lara-et-al',
  apiVersion: "2024-09-17",
  projectId: '8iwtdl5j',
  dataset: 'production',
  useCdn: true,
  basePath: "/studio",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})