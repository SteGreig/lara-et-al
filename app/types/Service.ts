import { PortableTextBlock } from "sanity";

export type Service = {
  title: string;
  description: PortableTextBlock[];
  image?: string;
}