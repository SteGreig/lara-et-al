import { Metadata } from 'next';

export function generatePageMetadata(page: any, defaults: any): Metadata {

  const seo = page.seo;

  const seoTitle = seo?.metaTitle || page.heroHeadline;
  const seoDesc = seo?.metaDescription || page.excerpt;
  const ogImage = seo?.openGraphImage;

  const metadata: Metadata = {
    openGraph: {
      title: seoTitle,
      description: seoDesc,
      images: {
        url: ogImage || defaults.seo.ogImage,
        width: 1920,
        height: 960,
      },
    },
  };

  if (seoTitle) {
    metadata.title = seoTitle;
  }

  if (seoDesc) {
    metadata.description = seoDesc;
  }

  return metadata;
}
