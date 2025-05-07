import { getCloudFrontVideo } from '../../utility/cloudfront';
import { 
    // THUMBNAILS
    gracemanningCom, emmygardnerOnline, classifiedsLol, gracesPortal, itneedsmorecolor, graceIsOnline,
 } from '../../assets/projects/projects';

export const websites = [
    {
        title: 'a portfolio site for emmy',
        link: 'emmygardner.online',
        href: 'https://emmygardner.online/',
        thumbnail: emmygardnerOnline
    },
    {
        title: 'a craigslist knockoff',
        link: 'classifieds.lol',
        href: 'https://classifieds.lol/',
        thumbnail: classifiedsLol
    },
    {
        title: 'a (professional) portfolio website for myself',
        link: 'grace-manning.com',
        href: 'https://grace-manning.com/',
        thumbnail: gracemanningCom
    },
    {
        title: 'my personal portal on the internet',
        link: 'graces-portal.net',
        href: 'https://graces-portal.net/',
        thumbnail: gracesPortal
    },
    {
        title: 'the website that was going to be the one you are currently looking at, until I redesigned the entire thing...',
        link: 'itneedsmorecolor.com',
        href: 'https://itneedsmorecolor.com/',
        thumbnail: itneedsmorecolor
    },
    {
        title: 'the website you are viewing right at this very moment',
        link: `let's see it again!`,
        href: 'https://graceis.online/',
        thumbnail: graceIsOnline
    },
]

export const musicVideos = [
    {
        title: 'black sheep by metric - lyric video',
        link: '',
        href: '',
        embed: <iframe src="https://www.youtube.com/embed/YpCVh5VX8mc?si=-qsG2CKij9gbVPVo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    },
    {
        title: 'talk talk by charli xcx - lyric video',
        link: '',
        href: '',
        embed: <iframe src="https://www.youtube.com/embed/QL--AfXtkCo?si=bKkyBOGr1yJQF7Tk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    },
]

export const touchdesignerClips = [
    {
        title: 'VHS Animation 1',
        source: "https://graceisonline.s3.us-west-2.amazonaws.com/videos/vhs-animation1.mp4"
    },
    {
        title: 'VHS Animation 2',
        source: getCloudFrontVideo('vhs-animation2.mp4')
    },
    {
        title: 'VHS Animation 3',
        source: getCloudFrontVideo('vhs-animation3.mp4')
    },
    {
        title: 'VHS Animation 4',
        source: getCloudFrontVideo('vhs-animation4.mp4')
    }
]