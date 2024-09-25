import { createClient, groq } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: "8iwtdl5j",
  dataset: "production",
  apiVersion: "2024-09-17",
  //useCdn: false,
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

export async function getHomePage() {
  return client.fetch(
    groq`*[_type == "pageHome"][0]{
      heroSlides[]{
        caption,
        "image": image.asset->url,
        "imageAlt": image.asset->alt,
        "projectSlug": projectLink->slug.current
      },
      heroSubline
    }`
  )
}

export async function getStandardPageData(doc: string) {
  return client.fetch(
    groq`*[_type == "${doc}"][0]{
      heroHeadline,
      contentCopy,
      "contentImage": contentImage.asset->url,
      seo {
        metaTitle,
        metaDescription,
        "ogImage": openGraphImage.asset->url
      }
    }`
  )
}

export async function getSiteSettings() {
  return client.fetch(
    groq`*[_type == "siteSettings"][0]{
      ...,
      "logo": logo.asset->url
    }`
  )
}


// export async function getSingleton(doc: string) {
//   const query = `*[_type == "${doc}"][0]`;
//   const data = await client.fetch(query);
//   return data;
// }