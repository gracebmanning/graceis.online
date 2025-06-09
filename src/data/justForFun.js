import { getCloudFrontVideo } from '../utility/cloudfront';
import { gracemanningCom, classifiedsLol, gracesPortal, itneedsmorecolor, blackSheep, talkTalk, trippyNoise, vhsAnimations, feedbackVisuals, curseIsLifted} from '../assets/assets';
import ReactPlayer from 'react-player';

// TODO: match fields to those in projects.js
// TODO: custom component with all react player settings. Might be different between visual vs. youtube video.
export const justForFun = [
    {
        title: 'mini visual: "curse is lifted" by bassvictim',
        description: 'visuals created in TouchDesigner',
        tags: ['lyric video'],
        date: 'June 2025',
        thumbnail: curseIsLifted,
        externalLink: null,
        body:
        <div>
            <ReactPlayer
                url={getCloudFrontVideo('Curse-Is-Lifted.mp4')}
                className="temp"
                width="70%"
                height="360px"
                controls={true}
                loop={true}
                />
        </div>
    },
    {
        title: 'pulsing noise 1 & 2',
        description: 'visuals created in TouchDesigner',
        tags: ['random visual'],
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
        tags: ['lyric video'],
        date: 'November 2024',
        thumbnail: blackSheep,
        externalLink: 'https://youtu.be/YpCVh5VX8mc?si=Wb8XaNh3WSLOeOGl',
        body:
        <div>
            This is a description of the project.
        </div>
    },
    {
        title: 'feedback practice',
        description: 'visuals created in TouchDesigner',
        tags: ['random visual'],
        date: 'November 2024',
        thumbnail: feedbackVisuals,
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
        tags: ['lyric video'],
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
        tags: ['random visual'],
        date: 'October 2024',
        thumbnail: vhsAnimations,
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
        tags: ['website'],
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
        tags: ['website'],
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
        tags: ['website'],
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
        tags: ['website'],
        date: 'August 2023 - Present',
        thumbnail: gracesPortal,
        externalLink: 'https://graces-portal.net/',
        body:
        <div>
            This is a description of the project.
        </div>
    },
]