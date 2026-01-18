import "./About.css";
import { FiMail, FiFileText, FiLinkedin } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import {
    grace,
    UCIAnteater,
    silks,
    pufferSnoopy,
    gardening,
    tdWorking,
    hiking,
} from "../../assets/assets";
import { BasicLayout } from "../../layouts/BasicLayout";
import resume from "../../documents/resume.pdf";

const AboutContent = (
    <div className="aboutContainer">
        <div className="aboutHeader">
            <p className="textHandwritten" style={{ fontSize: "24px" }}>
                about me
            </p>
        </div>
        <div className="aboutSection1">
            <img src={grace.src} alt={grace.alt} />
            <div className="aboutSection1Text">
                <div className="contactButton">
                    <FiMail className="icon" />
                    <p>hello [@] graceis.online</p>
                </div>
                <div className="secondaryContactButtons">
                    <a
                        className="contactButton contactButton2"
                        href={resume}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiFileText className="icon" />
                        <p>resumé</p>
                        <MdArrowOutward style={{ marginLeft: "5px" }} />
                    </a>
                    <a
                        className="contactButton contactButton2"
                        href="https://www.linkedin.com/in/grace-manning/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiLinkedin className="icon" />
                        <p>LinkedIn</p>
                        <MdArrowOutward style={{ marginLeft: "5px" }} />
                    </a>
                </div>
                <div style={{ border: "1px solid black", boxShadow: "10px 10px", padding: "7px" }}>
                    <p className="textHandwritten">i am a...</p>
                    <p className="textCursive" style={{ paddingLeft: "10px" }}>
                        creative technologist
                    </p>
                    <p className="textWhimsy" style={{ paddingLeft: "20px", paddingBottom: "5px" }}>
                        {" "}
                        software engineer,
                    </p>
                    <p className="textHandwritten"> & maker of things</p>
                </div>
            </div>
        </div>
        <div className="aboutSection2">
            <p className="textHandwritten">what does that even mean?</p>
            <div className="graphPaperText" style={{ marginTop: "10px" }}>
                <p>
                    I enjoy doing lots of things and can't pick one, so I wear many hats: software
                    engineer, web developer, visual designer, ...the list goes on.
                </p>
            </div>
            <div className="graphPaperText">
                <p>
                    I'm currently expanding my work to include interactive & audio-reactive content
                    (both live & pre-recorded) using{" "}
                    <a href="https://derivative.ca/" target="_blank" rel="noreferrer">
                        TouchDesigner
                    </a>
                    . My goal is to work on large-scale projects and installations utilizing this
                    technology.
                </p>
            </div>
            <div
                className="graphPaperText"
                style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
            >
                <img
                    src={UCIAnteater.src}
                    alt={UCIAnteater.alt}
                    style={{ width: "100px", marginRight: "5px", transform: "rotate(-8deg)" }}
                />
                <p>I have a B.S. in Computer Science from UC Irvine (go anteaters!!)</p>
            </div>
            <div className="graphPaperText">
                <p>let's get in touch! email me at hello [@] graceis.online</p>
            </div>
        </div>
        <div className="aboutSection3">
            <p className="textHandwritten">my skills include...</p>
            <div className="graphPaperText" style={{ marginTop: "10px" }}>
                <ul>
                    <li>
                        <span style={{ fontWeight: "bold" }}>Live Visuals:</span> TouchDesigner,
                        Resolume
                    </li>
                    <li>
                        <span style={{ fontWeight: "bold" }}>Design/Prototyping:</span> Figma,
                        Inkscape
                    </li>
                    <li>
                        <span style={{ fontWeight: "bold" }}>Web Dev:</span> HTML, CSS, JavaScript,
                        TypeScript, React, Angular, Next.js
                    </li>
                    <li>
                        <span style={{ fontWeight: "bold" }}>App Dev:</span> Flutter/Dart, Android
                        Studio, Xcode
                    </li>
                    <li>
                        <span style={{ fontWeight: "bold" }}>Other languages:</span> Python, C, C++,
                        Java, Racket
                    </li>
                    <li>
                        <span style={{ fontWeight: "bold" }}>Databases:</span> MySQL, PostgreSQL,
                        Redis, MongoDB
                    </li>
                    <li>
                        <span style={{ fontWeight: "bold" }}>Tools:</span> Git/GitHub, AWS (EC2, S3,
                        CloudFront), Squarespace, WordPress, Slate (CRM), Sanity (CMS)
                    </li>
                </ul>
            </div>
        </div>
        <div className="aboutSection4">
            <p className="textHandwritten">slices of life</p>
            <div className="graphPaperText" id="slicesOfLifeImages">
                <div className="slicesOfLifeImageContainer">
                    <img src={silks.src} alt={silks.alt} />
                    <p>Favorite hobby = aerial silks!</p>
                </div>
                <div className="slicesOfLifeImageContainer">
                    <img src={pufferSnoopy.src} alt={pufferSnoopy.alt} />
                    <p className="slicesOfLifeCaption">
                        Possibly my favorite crochet project so far.
                    </p>
                </div>
                <div className="slicesOfLifeImageContainer">
                    <img src={gardening.src} alt={gardening.alt} />
                    <p>Gardening is the best way to unwind.</p>
                </div>
                <div className="slicesOfLifeImageContainer">
                    <img src={tdWorking.src} alt={tdWorking.alt} />
                    <p>Eating and working on a TouchDesigner project.</p>
                </div>
                <div className="slicesOfLifeImageContainer">
                    <img src={hiking.src} alt={hiking.alt} />
                    <p>Hiking in Oregon :-)</p>
                </div>
            </div>
        </div>
    </div>
);

export default function About() {
    return <BasicLayout title={"About"} content={AboutContent} />;
}
