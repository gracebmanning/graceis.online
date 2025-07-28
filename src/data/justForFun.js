import { getCloudFrontVideo } from '../utility/cloudfront';
// THUMBNAILS
import { gracemanningCom, classifiedsLol, gracesPortal, itneedsmorecolor, blackSheep, talkTalk, pulsingNoise, vhsAnimations, feedbackVisuals, curseIsLifted} from '../assets/assets';
// OTHER IMAGES
import { pulsingNoiseNetwork1, pulsingNoiseNetwork2 } from '../assets/assets'; 
import CaptionedVideo from '../components/CaptionedVideo/CaptionedVideo';
import CaptionedImage from '../components/CaptionedImage/CaptionedImage';

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
            <p>
                I created this mini visual for "Curse is Lifted (Club rmx)" by <a href="https://bassvictim.net/" target="_blank" rel="noreferrer">Bassvictim</a> after listening to it obsessively for a week. 
                Using TouchDesigner, I implemented several feedback loops that layer noises, lens distortions, and other effects, then switched between them at manually-selected timestamps.
            </p>
            <CaptionedVideo source={getCloudFrontVideo('Curse-Is-Lifted.mp4')} size={'small'} caption={''} />
        </div>
    },
    {
        title: 'pulsing noise 1 & 2',
        description: 'visuals created in TouchDesigner',
        date: 'February 2025',
        type: 'random visual',
        thumbnail: pulsingNoise,
        externalLink: null,
        isFeatured: false,
        isOngoing: false,
        body:
        <div>
            <p>
                Just having some fun with the Noise TOP in TouchDesigner...!
            </p>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "first baseline", gap: "20px"}}>
                <CaptionedVideo source={getCloudFrontVideo('pulsing-noise1.mp4')} size={'small'} caption={'Pulsing Noise 1'} />
                <CaptionedVideo source={getCloudFrontVideo('pulsing-noise2.mp4')} size={'small'} caption={'Pulsing Noise 2'} />
            </div>
            <p>
                In the first visual, I started by feeding two Noise TOPs into a Displace TOP. This displaces noise1 using the patterns created in noise2.
                To add movement, I used an LFO CHOP + Lag CHOP to create a pulsing motion, then I referenced that in the noise2 Offset value.
            </p>
            <CaptionedImage source={pulsingNoiseNetwork1.src} alt={pulsingNoiseNetwork1.alt} size={'large'} caption={'TouchDesigner network for Pulsing Noise 1'} />
            <p>
                The second visual started very similarly with two Noise TOPs into a Displace TOP. However, the CHOP sequence included an additional element: the Speed CHOP.
                This takes the value from the LFO + Lag CHOP combination and adds it onto itself, meaning the value is always increasing (rather than a back-and-forth pulse).
                The output from the Displace TOP is fed into a Feedback TOP, Lens Distort TOP, and Composite TOP. This feedback loop creates the effect that the visual is
                moving towards the viewer's perspective, while the CHOP sequence creates a subtle pulsing motion on top of that.
            </p>
            <CaptionedImage source={pulsingNoiseNetwork2.src} alt={pulsingNoiseNetwork2.alt} size={'large'} caption={'TouchDesigner network for Pulsing Noise 2'} />
        </div>
    },
    {
        title: '"black sheep" by metric',
        description: 'a lyric video for "Black Sheep" by Metric, created using TouchDesigner.',
        date: 'November 2024',
        type: 'lyric video',
        thumbnail: blackSheep,
        externalLink: ['youtube', 'https://youtu.be/YpCVh5VX8mc?si=Wb8XaNh3WSLOeOGl'],
        isFeatured: true,
        isOngoing: false,
        body:
        <div>
            <p>
                This was my first large TouchDesigner project! I was listening to "Black Sheep" obsessively and envisioned a guitar that's splitting apart
                during the guitar solos...hence why I felt the need to make this video. It was a lot of fun to make and I learned a lot about how <i>not</i> to 
                organize a TD project (the network for this one is very messy). But this helped me realize I love making lyric videos!
            </p>
            <CaptionedVideo source={getCloudFrontVideo('BlackSheep_lyricvideo-1.mp4')} size='large' caption='lyric video for "Black Sheep" by Metric, created by Grace Manning' />
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
            <p>
                Thank you to Okamirufu Visualizer for the <a href="https://youtu.be/a7KtirwLoyo?si=gfeFmiFZW3cyBF2h" rel="noreferrer" target="_blank">What is Feedback?</a> video / tutorial. Fun practice!
            </p>
            <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "first baseline", gap: "20px"}}>
                <CaptionedVideo source={getCloudFrontVideo('Motiontrail.mp4')} size='small' caption='Motion Trail' />
                <CaptionedVideo source={getCloudFrontVideo('Decayanddissolve.mp4')} size='small' caption='Decay and Dissolve' />
                <CaptionedVideo source={getCloudFrontVideo('Mirrortriangles.mp4')} size='small' caption='Mirror Triangles' />
            </div>
        </div>
    },
    {
        title: '"talk talk" by charli xcx',
        description: 'a lyric video for "Talk Talk" by Charli xcx, created using TouchDesigner.',
        date: 'October 2024',
        type: 'lyric video',
        thumbnail: talkTalk,
        externalLink: ['youtube', 'https://youtu.be/QL--AfXtkCo?si=rLCsXsu1IpqQuV2K'],
        isFeatured: true,
        isOngoing: false,
        body:
        <div>
            <p>
                This was my first step into lyric videos. These always reveal what song was stuck in my head at the time :)
            </p>
            <p>
                Thank you to bileam tschepe (elekktronaut) for
                the <a href="https://youtu.be/rYet0SwTYa0?si=0GJZ_X1LAFD-WglB" target="_blank" rel="noreferrer">instancing tutorial</a>, 
                specifically the Audio Spectrum chapter for visualizing waveforms!
            </p>
            <CaptionedVideo source={getCloudFrontVideo('TalkTalk-LyricVideo.mp4')} size='large' caption='lyric video for "Talk Talk" by Charli xcx, created by Grace Manning' />
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
            <p>
                Practicing how to visualize motion using CHOP channels.
            </p>
            <p>
                Thank you to bileam tschepe (elekktronaut) for
                the <a href="https://youtu.be/WS4iZxoQT5s?si=juRd41Ya21RqeB3v" target="_blank" rel="noreferrer">Simple VHS Animations tutorial</a>!
            </p>
            <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "first baseline", gap: "20px"}}>
                <CaptionedVideo source={getCloudFrontVideo('vhs-animation1.mp4')} size='small' caption='Motion Trail' />
                <CaptionedVideo source={getCloudFrontVideo('vhs-animation2.mp4')} size='small' caption='Decay and Dissolve' />
                <CaptionedVideo source={getCloudFrontVideo('vhs-animation3.mp4')} size='small' caption='Mirror Triangles' />
                <CaptionedVideo source={getCloudFrontVideo('vhs-animation4.mp4')} size='small' caption='Mirror Triangles' />
            </div>
        </div>
    },
    {
        title: 'itneedsmorecolor.com',
        description: 'the website that was going to be the one you are currently looking at, until I redesigned the entire thing...',
        date: 'January 2024',
        type: 'website',
        thumbnail: itneedsmorecolor,
        externalLink: ['link', 'https://itneedsmorecolor.com/'],
        isFeatured: false,
        isOngoing: false,
        body:
        <div>
            [project details coming soon]
        </div>
    },
    {
        title: 'classifieds.lol',
        description: 'a craigslist knockoff',
        date: 'August 2023',
        type: 'website',
        thumbnail: classifiedsLol,
        externalLink: ['link', 'https://classifieds.lol/'],
        isFeatured: false,
        isOngoing: true,
        body:
        <div>
            [project details coming soon]
        </div>
    },
    {
        title: 'grace-manning.com',
        description: 'a (professional) portfolio website for myself',
        date: 'November 2023 - September 2024',
        type: 'website',
        thumbnail: gracemanningCom,
        externalLink: ['link', 'https://grace-manning.com/'],
        isFeatured: false,
        isOngoing: true,
        body:
        <div>
            [project details coming soon]
        </div>
    },
    {
        title: 'graces-portal.net',
        description: 'my personal portal on the internet',
        date: 'August 2023',
        type: 'website',
        thumbnail: gracesPortal,
        externalLink: ['link', 'https://graces-portal.net/'],
        isFeatured: false,
        isOngoing: false,
        body:
        <div>
            [project details coming soon]
        </div>
    },
]