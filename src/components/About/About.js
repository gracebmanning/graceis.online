import './About.css';
import { backarrow, bear, grace } from '../../assets/assets';
import { daisiesFlipped, daisiesBottom } from '../../assets/backgrounds/backgrounds';

export default function About(){
    return(
        <div>
            <img className='backgroundImg topRight subpageDaisies' src={daisiesFlipped} alt='two daisies with smaller purple blooms and surrounding greenery' />
            <img className='backgroundImg bottomLeft subpageDaisiesBottom' src={daisiesBottom} alt='' />
            <div className='container subpageContainer'>
                <div className='subpageText'>
                    <a className='backLink' href='/'>
                        <img src={backarrow} alt='sketch outline of arrow pointing left' />
                        go home
                    </a>
                </div>
                <div className='subpageText subpageHeader aboutHeader'>
                    <div className='subpageHeaderText'>
                        <h2>about me</h2>
                        <h1>grace manning</h1>
                    </div>
                    <img id='teddybear' src={bear} alt='brown teddy bear' />
                </div>
                <div className='subpageText aboutText'>
                    <div className='aboutLine'>
                        <p className='textCursive'>creative technologist,</p>
                        <p className='textBasic'>⋆ ˚｡⋆୨୧˚౨ৎ</p>
                    </div>
                    <div className='aboutLine'>
                        <p className='textBasic'>internet dweller,</p>
                    </div>
                    <div className='aboutLine'>
                        <p className='textBasic'>. ݁₊ ⊹ . ݁˖ . ݁</p>
                        <p className='textHandwritten'>& maker of things</p>
                    </div>
                </div>
                <div className='subpageText aboutText'>
                    <div className='aboutBio'>
                        <img src={grace} alt='grace takes a selfie with the camera from a high angle. she has her eyes closed and is smiling contently.' />
                        <div className='aboutBioText'>
                            <p>I'm Grace :) a web developer, software engineer, visual designer, and creator.</p>
                            <p>I am passionate about human-centered design and creating technology that impacts people in a meaningful way.</p>
                            <p>I have a B.S. in Computer Science from UC Irvine (go anteaters!!), which helped me discover the parts of software engineering that I absolutely love.</p>
                            <p style={{fontWeight: 'bold'}}>let's get in touch! email me at contact [@] graceis [.] online</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

/*
<div className='subpageText'>
    <p className='textBasic' id='char1'>. ݁₊ ⊹ . ݁˖ . ݁</p>
    <p className='textCursive' id='char2'>creative technologist</p>
    <p className='textBasic' id='char3'>⋆ ˚｡⋆୨୧˚౨ৎ</p>
    <p className='textHandwritten' id='char4'>what does that even mean?</p>
    <img src={arrow} id='char5' alt='thin hand-drawn black arrow pointing down and slightly to the right' />
    <p className='textWhimsy' id='char6'>i like <span className='aboutTextCursive'>computers</span></p>
    <p className='textWhimsy' id='char7'>(i have a b.s. in computer science from uc irvine. go anteaters!!!)</p>
    <p className='textBasic' id='char8'>. ݁₊ ⊹ . ݁˖ . ݁</p>
    <p className='textWhimsy' id='char9'>&</p>
    <p className='textCursive' id='char10'>creating things!</p>
</div>
*/