import { getCloudFrontVideo } from '../utility/cloudfront';
import { gracemanningCom, classifiedsLol, gracesPortal, itneedsmorecolor, blackSheep, talkTalk, trippyNoise} from '../assets/assets';
import ReactPlayer from 'react-player';

// TODO: custom component with all react player settings. Might be different between visual vs. youtube video.
export const art = [
    {
        title: 'pulsing noise 1 & 2',
        description: 'visuals created in TouchDesigner',
        type: 'random visual',
        date: 'February 2025',
        thumbnail: trippyNoise,
        externalLink: null,
        body:
        <div>
            <ReactPlayer
                url={getCloudFrontVideo('pulsing-noise1.mp4')}
                className="temp"
                width="70%"
                height="360px"
                controls={true}
                loop={true}
                />
            <ReactPlayer
            url={getCloudFrontVideo('pulsing-noise2.mp4')}
            className="temp"
            width="70%"
            height="360px"
            controls={true}
            loop={true}
            />
        </div>
    },
    {
        title: '"black sheep" by metric',
        description: 'a lyric video for "Black Sheep" by Metric, created using TouchDesigner.',
        type: 'lyric video',
        date: 'November 2024',
        thumbnail: blackSheep,
        externalLink: 'https://youtu.be/YpCVh5VX8mc?si=Wb8XaNh3WSLOeOGl',
        body:
        <div>
            This is a description of the project.
        </div>
    },
    {
        title: 'learning about feedback',
        description: 'visuals created in TouchDesigner',
        type: 'random visual',
        date: 'November 2024',
        thumbnail: trippyNoise,
        externalLink: null,
        body:
        <div>
            <p>Motion Trail</p>
            <ReactPlayer
                url={getCloudFrontVideo('Motiontrail.mp4')}
                className="temp"
                width="70%"
                height="360px"
                controls={true}
                loop={true}
                />
            <p>Decay and Dissolve</p>
            <ReactPlayer
            url={getCloudFrontVideo('Decayanddissolve.mp4')}
            className="temp"
            width="70%"
            height="360px"
            controls={true}
            loop={true}
            />
            <p>Mirror Triangles</p>
            <ReactPlayer
            url={getCloudFrontVideo('Mirrortriangles.mp4')}
            className="temp"
            width="70%"
            height="360px"
            controls={true}
            loop={true}
            />
        </div>
    },
    {
        title: '"talk talk" by charli xcx',
        description: 'a lyric video for "Talk Talk" by Charli xcx, created using TouchDesigner.',
        type: 'lyric video',
        date: 'October 2024',
        thumbnail: talkTalk,
        externalLink: 'https://youtu.be/QL--AfXtkCo?si=rLCsXsu1IpqQuV2K',
        body:
        <div>
            This is a description of the project.
        </div>
    },
    {
        title: 'vhs animations',
        description: 'visuals created in TouchDesigner',
        type: 'random visual',
        date: 'October 2024',
        thumbnail: trippyNoise,
        externalLink: null,
        body:
        <div>
            <ReactPlayer
                url={getCloudFrontVideo('vhs-animation1.mp4')}
                className="temp"
                width="70%"
                height="360px"
                controls={true}
                loop={true}
                />
            <ReactPlayer
            url={getCloudFrontVideo('vhs-animation2.mp4')}
            className="temp"
            width="70%"
            height="360px"
            controls={true}
            loop={true}
            />
            <ReactPlayer
            url={getCloudFrontVideo('vhs-animation3.mp4')}
            className="temp"
            width="70%"
            height="360px"
            controls={true}
            loop={true}
            />
            <ReactPlayer
            url={getCloudFrontVideo('vhs-animation4.mp4')}
            className="temp"
            width="70%"
            height="360px"
            controls={true}
            loop={true}
            />
        </div>
    },
    {
        title: 'itneedsmorecolor.com',
        description: 'the website that was going to be the one you are currently looking at, until I redesigned the entire thing...',
        type: 'website',
        date: 'January 2024',
        thumbnail: itneedsmorecolor,
        externalLink: 'https://itneedsmorecolor.com/',
        body:
        <div>
            This is a description of the project.
        </div>
    },
    {
        title: 'classifieds.lol',
        description: 'a craigslist knockoff',
        type: 'website',
        date: 'August 2023 - Present',
        thumbnail: classifiedsLol,
        externalLink: 'https://classifieds.lol/',
        body:
        <div>
            This is a description of the project.
        </div>
    },
    {
        title: 'grace-manning.com',
        description: 'a (professional) portfolio website for myself',
        type: 'website',
        date: 'November 2023 - September 2024',
        thumbnail: gracemanningCom,
        externalLink: 'https://grace-manning.com/',
        body:
        <div>
            This is a description of the project.
        </div>
    },
    {
        title: 'graces-portal.net',
        description: 'my personal portal on the internet',
        type: 'website',
        date: 'August 2023 - Present',
        thumbnail: gracesPortal,
        externalLink: 'https://graces-portal.net/',
        body:
        <div>
            This is a description of the project.
        </div>
    },
]