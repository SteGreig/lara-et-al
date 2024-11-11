import { createClient, groq } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: "8iwtdl5j",
  dataset: "production",
  apiVersion: "2024-09-17",
  useCdn: true,
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
      contentHeadline,
      testimonialsIntro
    }`
  )
}

export async function getStandardPageData(doc: string) {
  return client.fetch(
    groq`*[_type == "${doc}"][0]{
      heroHeadline,
      contentCopy,
      "excerpt": array::join(string::split((pt::text(contentCopy)), "")[0..180], "") + "...",
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


export async function getSEODefaults() {
  return client.fetch(
    groq`*[_type == "siteSettings"][0]{
      seo {
        defaultMetaTitle,
        metaTitleSuffix,
        defaultMetaDescription,
        "ogImage": openGraphImage.asset->url
      },
      siteUrl
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
    groq`*[_type == "teamMember"] | order(orderRank){
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
    groq`*[_type == "testimonial"] | order(orderRank){
      _id,
      publishedAt,
      quote,
      person,
      detail,
    }`
  )
}

export async function getServices() {
  return client.fetch(
    groq`*[_type == "service"] | order(orderRank){
      _id,
      publishedAt,
      title,
      description,
      "image": image.asset->url,
    }`
  )
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"] | order(orderRank){
      _id,
      publishedAt,
      name,
      "slug": slug.current,
      "image": gallery[0].asset->url,
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
      description,
      "excerpt": array::join(string::split((pt::text(description)), "")[0..180], "") + "...",
      clientType,
      squareFootage,
      services,
      "mainImage": gallery[0].asset->url,
      gallery[] {
        alt,
        "url": asset->url,
        "metadata": asset->metadata {
          dimensions { width, height }
        }
      }
    }`,
    { slug }
  )
}


// export async function getSingleton(doc: string) {
//   const query = `*[_type == "${doc}"][0]`;
//   const data = await client.fetch(query);
//   return data;
// }