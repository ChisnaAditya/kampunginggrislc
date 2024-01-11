import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://program.kampunginggrislc.com',
            lastModified: new Date(),
        },
        {
            url: 'https://program.kampunginggrislc.com/intensive',
            lastModified: new Date(),
        },
        {
            url: 'https://program.kampunginggrislc.com/englishmaster',
            lastModified: new Date(),
        },
    ]
}