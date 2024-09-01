import {defineConfig} from 'sanity';
//import {deskTool} from "sanity/desk";
import {structureTool} from 'sanity/structure'
import schemas from './sanity/schemas';


const config =  defineConfig({
    projectId:'zm1bbp7g',
    dataset:'production',
    title:'Pelican Webdev Website',
    apiVersion: "2024-08-30",
    basePath:"/admin",

    plugins:[structureTool()],
    schema: {types:schemas}


})

export default config;