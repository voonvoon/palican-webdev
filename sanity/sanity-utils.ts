import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/config/client-config";
import { Page } from "@/types/Page";

export async function getProjects(): Promise<Project[]> {
  // const client = createClient({
  //   projectId: "zm1bbp7g",
  //   dataset: "production",
  //   apiVersion: "2024-08-30",
  // });

  return createClient(clientConfig).fetch(
    groq`*[_type ==  'project']{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  // const client = createClient({
  //   projectId: "zm1bbp7g",
  //   dataset: "production",
  //   apiVersion: "2024-08-30",
  // });

  return createClient(clientConfig).fetch(
    groq`*[_type == 'project' && slug.current == $slug][0]{
          _id,
          _createdAt,
          name,
          "slug":slug.current,
          "image": image.asset->url,
          url,
          content
      }`,
    { slug } // slug:slug
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
  _id,
  _createdAt,
  title,
  "slug": slug.current
  }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
          _id,
  _createdAt,
  title,
  "slug": slug.current,
  content
    }`,
    { slug }
  );
}
