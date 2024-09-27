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


export async function getHomePage() {
  return client.fetch(
    groq`*[_type == "pageHome"][0]{
      heroSlides[]{
        caption,
        "image": image.asset->url,
        "imageAlt": image.asset->alt,
        "projectSlug": projectLink->slug.current
      },
      heroSubline,
      contentHeadline
    }`
  )
}

export async function getStandardPageData(doc: string) {
  return client.fetch(
    groq`*[_type == "${doc}"][0]{
      heroHeadline,
      contentCopy,
      "contentImage": contentImage.asset->url,
      "contentImageAlt": contentImage.asset->alt,
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

export async function getTeamMembers() {
  return client.fetch(
    groq`*[_type == "teamMember"] | order(publishedAt desc){
      _id,
      publishedAt,
      name,
      "slug": slug.current,
      "profileImage": profileImage.asset->url,
      bio,
      jobTitle,
    }`
  )
}

export async function getTestimonials() {
  return client.fetch(
    groq`*[_type == "testimonial"] | order(publishedAt desc){
      _id,
      publishedAt,
      quote,
      person,
      detail,
    }`
  )
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"] | order(publishedAt desc){
      _id,
      publishedAt,
      name,
      "slug": slug.current,
      "image": mainImage.asset->url,
      content,
    }`
  )
}

export async function getProject(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      publishedAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      content,
    }`,
    { slug }
  )
}


// export async function getSingleton(doc: string) {
//   const query = `*[_type == "${doc}"][0]`;
//   const data = await client.fetch(query);
//   return data;
// }