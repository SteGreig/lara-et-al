import { createClient, groq } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: "8iwtdl5j",
  dataset: "production",
  apiVersion: "2024-09-17",
});

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);
export function urlFor(source: string) {
  return builder.image(source)
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"] | order(publishedAt desc){
      _id,
      publishedAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      content,
      url,
    }`
  )
}