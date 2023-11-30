import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import dotenv from 'dotenv'

// dotenv.config();

export const client = sanityClient({
    projectId: "syci8nam",
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: "skfVGLFsaHIAH1k1uOMB10tcU5pTIP589gBVF4HIg0Y9jv3CXGPeShlKneRlZ2iwsrPpCeGqjMVxl1JnK4YNvnkZlwrji8YGfEUtcNOotjSjXHIAtWjbdiSD8erDob6Qyln7FxY7K9SpQdeb1YugBDl66aAPWdFH426cAzBEAe1jFhkOatsM"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);