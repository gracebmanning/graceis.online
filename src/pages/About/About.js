import './About.css';
import { earthStar, grace, UCIAnteater } from '../../assets/assets';
import { BasicLayout } from '../../layouts/BasicLayout';

const AboutContent = 
        <div className="aboutContainer">
            <div className="aboutHeader">
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <p className="textHandwritten" style={{fontSize: "24px"}}>hi, i'm grace!</p>
                    <img src={grace.src} alt={grace.alt} />
                </div>
                <div className="aboutHeaderText">
                    <p className="textHandwritten" style={{fontSize: "24px"}}>i am a:</p>
                    <p style={{lineHeight: "2.5", margin: "0px"}}>
                        <span className='textCursive'>creative technologist,</span>
                        <span className='textWhimsy'> software engineer,</span>
                        <span className='textHandwritten'> & maker of things</span>
                    </p>
                </div>
                
            </div>
            <p><span className='textBasic'>⋆ ˚｡⋆୨୧˚౨ৎ  . ݁₊ ⊹ . ݁˖ . ݁  ⋆ ˚｡⋆୨୧˚౨ৎ  . ݁₊ ⊹ . ݁˖ . ݁   ݁. ˖ ݁. ⊹ ₊ ݁.⋆୨୧˚౨ৎ⋆｡˚ ⋆   ݁. ˖ ݁. ⊹ ₊ ݁⋆୨୧˚౨ৎ⋆｡˚ ⋆</span></p>
            <div className="aboutParagraph">
                <div className="graphPaperStrip strip1">
                    <p className="textHandwritten" style={{fontSize: '24px'}}>What does that mean?</p>
                </div>
                <div className="graphPaperStrip strip2">
                    <p className='textHandwritten' style={{fontSize: '22px'}}>I enjoy doing lots of things and can't pick one, so I wear many hats: software engineer, web developer, visual designer, ...the list goes on.</p>
                </div>
                <div className="graphPaperStrip strip3">
                    <p className='textHandwritten' style={{fontWeight: 'bold', fontSize: '22px'}}>I'm currently expanding my work to include interactive & audio-reactive content (both live & pre-recorded) using <a href="https://derivative.ca/" target="_blank" rel="noreferrer">touchdesigner</a>. My goal is to work on large-scale projects and installations utilizing this technology.</p>
                </div>
                <div className="graphPaperStrip strip2">
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <img src={UCIAnteater.src} alt={UCIAnteater.alt} style={{width: "100px", marginRight: "5px", transform: "rotate(-8deg)"}} /> 
                        <p className='textHandwritten' style={{fontSize: '22px'}}>I have a b.s. in computer science from uc Irvine<br/>(go anteaters!!)</p>
                    </div>
                </div>
                <div className="graphPaperStrip strip3" id="contactMe">
                    <p className='textHandwritten' style={{fontSize: '22px'}}>let's get in touch! email me at hello [@] graceis.online</p>
                    <img src={earthStar.src} alt={earthStar.alt} style={{width: "50px", marginLeft: "5px"}} />
                </div>
            </div>
        </div>


export default function About(){
    return(
        <BasicLayout title={"About"} content={AboutContent} />
    )
}