import './About.css';
import { FiMail } from "react-icons/fi";
import { grace, UCIAnteater } from '../../assets/assets';
import { BasicLayout } from '../../layouts/BasicLayout';

const AboutContent = 
        <div className="aboutContainer">
            <div className="aboutHeader">
                <p className="textHandwritten" style={{fontSize: "24px"}}>about me</p>
            </div>
            <div className="aboutSection1">
                <img src={grace.src} alt={grace.alt} />
                <div className="aboutSection1Text">
                    <div className="contactButton">
                        <FiMail className="mailIcon" />
                        <p>hello [@] graceis.online</p>
                    </div>
                    <div style={{border: "1px solid black", boxShadow: "10px 10px", padding: "7px"}}>
                        <p className="textHandwritten">i am a...</p>
                        <p className="textCursive" style={{paddingLeft: "10px"}}>creative technologist</p>
                        <p className="textWhimsy" style={{paddingLeft: "20px", paddingBottom: "5px"}}> software engineer,</p>
                        <p className="textHandwritten"> & maker of things</p>
                    </div>
                </div>
            </div>
            <div className="aboutSection2">
                <p className="textHandwritten">what does that even mean?</p>
                <div className="graphPaperText">
                    <p>I enjoy doing lots of things and can't pick one, so I wear many hats: software engineer, web developer, visual designer, ...the list goes on.</p>
                </div>
                <div className="graphPaperText">
                    <p>I'm currently expanding my work to include interactive & audio-reactive content (both live & pre-recorded) using <a href="https://derivative.ca/" target="_blank" rel="noreferrer">TouchDesigner</a>. My goal is to work on large-scale projects and installations utilizing this technology.</p>
                </div>
                <div className="graphPaperText" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <img src={UCIAnteater.src} alt={UCIAnteater.alt} style={{width: "100px", marginRight: "5px", transform: "rotate(-8deg)"}} />
                    <p>I have a B.S. in Computer Science from UC Irvine (go anteaters!!)</p>
                </div>
                <div className="graphPaperText">
                    <p>let's get in touch! email me at hello [@] graceis.online</p>
                </div>
            </div>
        </div>


export default function About(){
    return(
        <BasicLayout title={"About"} content={AboutContent} />
    )
}