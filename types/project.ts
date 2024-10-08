import { PortableTextBlock } from "next-sanity";

export type Project = {
    _id: string;
    _createAt: Date;
    name: string;
    slug: string;
    image: string;
    url: string;
    alt:string;
    content: PortableTextBlock[]; // string, img etc...
   

}

export type Blog = {
    _id: string;
    _createAt: Date;
    title: string;
    slug: string;
    image: string;
    alt:string;
    content: PortableTextBlock[]; // string, img etc...
   

}