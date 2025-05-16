import { getCloudFrontVideo } from '../utility/cloudfront';
import { emmygardnerOnline } from '../assets/assets';

export const projects = [
    {
        title: 'emmygardner.online',
        description: 'a portfolio site for emmy',
        date: 'October 2024 - Present',
        type: 'website',
        thumbnail: emmygardnerOnline,
        body:
        <div>
            <a href="https://emmygardner.online/">link</a>
        </div>
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
        title: 'Pulsing Noise 1',
        source: getCloudFrontVideo('pulsing-noise1.mp4'),
        date: 'February 2025'
    },
    {
        title: 'Pulsing Noise 2',
        source: getCloudFrontVideo('pulsing-noise2.mp4'),
        date: 'February 2025'
    },
    {
        title: 'Motion Trail',
        source: getCloudFrontVideo('Motiontrail.mp4'),
        date: 'November 2024'
    },
    {
        title: 'Decay and Dissolve',
        source: getCloudFrontVideo('Decayanddissolve.mp4'),
        date: 'November 2024'
    },
    {
        title: 'Mirror Triangles',
        source: getCloudFrontVideo('Mirrortriangles.mp4'),
        date: 'November 2024'
    },
    {
        title: 'VHS Animation 1',
        source: getCloudFrontVideo('vhs-animation1.mp4'),
        date: 'October 2024'
    },
    {
        title: 'VHS Animation 2',
        source: getCloudFrontVideo('vhs-animation2.mp4'),
        date: 'October 2024'
    },
    {
        title: 'VHS Animation 3',
        source: getCloudFrontVideo('vhs-animation3.mp4'),
        date: 'October 2024'
    },
    {
        title: 'VHS Animation 4',
        source: getCloudFrontVideo('vhs-animation4.mp4'),
        date: 'October 2024'
    }
]