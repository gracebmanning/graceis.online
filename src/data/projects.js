import { emmygardnerOnline } from '../assets/assets';

export const projects = [
    {
        title: 'emmygardner.online',
        description: 'a portfolio site for emmy',
        date: 'October 2024', // Use a consistent date format for easier parsing
        type: 'website',
        thumbnail: emmygardnerOnline,
        externalLink: "https://emmygardner.online/",
        isFeatured: true,
        isOngoing: true,
        body:
        <div>
            I created a portfolio website for my friend Emmy, who works in media production. This is a <a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a> app that uses <a href="https://www.sanity.io/" target="_blank" rel="noreferrer">Sanity</a> for content management.
        </div>
    },
];