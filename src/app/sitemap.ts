import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://alessiocapecchi.com',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://alessiocapecchi.com',
                    it: 'https://alessiocapecchi.com/it',
                }
            }
        },
        {
            url: 'https://alessiocapecchi.com/about',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://alessiocapecchi.com/about',
                    it: 'https://alessiocapecchi.com/it/about',
                }
            }
        },
        {
            url: 'https://alessiocapecchi.com/projects',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://alessiocapecchi.com/projects',
                    it: 'https://alessiocapecchi.com/it/projects',
                }
            }
        },
        {
            url: 'https://alessiocapecchi.com/links',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://alessiocapecchi.com/links',
                    it: 'https://alessiocapecchi.com/it/links',
                }
            }
        },
    ];
}