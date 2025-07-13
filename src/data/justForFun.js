import { getCloudFrontVideo } from '../utility/cloudfront';
import { gracemanningCom, classifiedsLol, gracesPortal, itneedsmorecolor, blackSheep, talkTalk, trippyNoise, vhsAnimations, feedbackVisuals, curseIsLifted} from '../assets/assets';
import ReactPlayer from 'react-player';
import CaptionedVideo from '../components/CaptionedVideo/CaptionedVideo';

// TODO: custom component with all react player settings. Might be different between visual vs. youtube video.
export const justForFun = [
    {
        title: 'mini visual: "curse is lifted" by bassvictim',
        description: 'visuals created in TouchDesigner',
        date: 'June 2025',
        type: 'lyric video',
        thumbnail: curseIsLifted,
        externalLink: null,
        isFeatured: true,
        isOngoing: false,
        body:
        <div>
            <CaptionedVideo source={getCloudFrontVideo('Curse-Is-Lifted.mp4')} size={'medium'} caption={'this is the caption'} />
        </div>
    },
    {
        title: 'pulsing noise 1 & 2',
        description: 'visuals created in TouchDesigner',
        date: 'February 2025',
        type: 'random visual',
        thumbnail: trippyNoise,
        externalLink: null,
        isFeatured: false,
        isOngoing: false,
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
        date: 'November 2024',
        type: 'lyric video',
        thumbnail: blackSheep,
        externalLink: 'https://youtu.be/YpCVh5VX8mc?si=Wb8XaNh3WSLOeOGl',
        isFeatured: true,
        isOngoing: false,
        body:
        <div>
            This is a description of the project.
        </div>
    },
    {
        title: 'feedback practice',
        description: 'visuals created in TouchDesigner',
        date: 'November 2024',
        type: 'random visual',
        thumbnail: feedbackVisuals,
        externalLink: null,
        isFeatured: false,
        isOngoing: false,
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
        date: 'October 2024',
        type: 'lyric video',
        thumbnail: talkTalk,
        externalLink: 'https://youtu.be/QL--AfXtkCo?si=rLCsXsu1IpqQuV2K',
        isFeatured: true,
        isOngoing: false,
        body:
        <div>
            This is a description of the project.
        </div>
    },
    {
        title: 'vhs animations',
        description: 'visuals created in TouchDesigner',
        date: 'October 2024',
        type: 'random visual',
        thumbnail: vhsAnimations,
        externalLink: null,
        isFeatured: false,
        isOngoing: false,
        body:
        <div>
            utilized a __tutorial__ (link here) to create these and get practice with visualizing motion from CHOPs
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
        date: 'January 2024',
        type: 'website',
        thumbnail: itneedsmorecolor,
        externalLink: 'https://itneedsmorecolor.com/',
        isFeatured: false,
        isOngoing: false,
        body:
        <div>
            This is a description of the project.
        </div>
    },
    {
        title: 'classifieds.lol',
        description: 'a craigslist knockoff',
        date: 'August 2023',
        type: 'website',
        thumbnail: classifiedsLol,
        externalLink: 'https://classifieds.lol/',
        isFeatured: false,
        isOngoing: true,
        body:
        <div>
            This is a description of the project.
        </div>
    },
    {
        title: 'grace-manning.com',
        description: 'a (professional) portfolio website for myself',
        date: 'November 2023 - September 2024',
        type: 'website',
        thumbnail: gracemanningCom,
        externalLink: 'https://grace-manning.com/',
        isFeatured: false,
        isOngoing: true,
        body:
        <div>
            This is a description of the project.
        </div>
    },
    {
        title: 'graces-portal.net',
        description: 'my personal portal on the internet',
        date: 'August 2023',
        type: 'website',
        thumbnail: gracesPortal,
        externalLink: 'https://graces-portal.net/',
        isFeatured: false,
        isOngoing: false,
        body:
        <div>
            This is a description of the project.
        </div>
    },
]