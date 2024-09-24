import './About.css';
import { daisiesFlipped, daisiesBottom, backarrow, arrow, bear } from '../../assets/assets';

export default function About(){
    return(
        <div>
            <img className='backgroundImg topRight' id='aboutDaisies' src={daisiesFlipped} alt='two daisies with smaller purple blooms and surrounding greenery' />
            <img className='backgroundImg bottomLeft' id='aboutDaisiesBottom' src={daisiesBottom} alt='' />
            <div className='container aboutContainer'>
                <div className='aboutText'>
                    <a className='backLink' href='/'>
                        <img src={backarrow} alt='sketch outline of arrow pointing left' />
                        go home
                    </a>
                </div>
                <div className='aboutText aboutHeader'>
                    <div className='aboutHeaderText'>
                        <h2>about me</h2>
                        <h1>grace manning</h1>
                    </div>
                    <img src={bear} alt='brown teddy bear' />
                </div>
                <div className='aboutText'>
                    <p className='aboutTextCharacters' id='char1'>. ݁₊ ⊹ . ݁˖ . ݁</p>
                    <p className='aboutTextCursive' id='char2'>creative technologist</p>
                    <p className='aboutTextCharacters' id='char3'>⋆ ˚｡⋆୨୧˚౨ৎ</p>
                    <p className='aboutTextLacquer' id='char4'>what does that even mean?</p>
                    <img src={arrow} id='char5' alt='thin hand-drawn black arrow pointing down and slightly to the right' />
                    <p className='aboutTextPlaypen' id='char6'>i like <span className='aboutTextCursive'>computers</span></p>
                    <p className='aboutTextPlaypen' id='char7'>(i have a b.s. in computer science from uc irvine. go anteaters!!!)</p>
                    <p className='aboutTextCharacters' id='char8'>. ݁₊ ⊹ . ݁˖ . ݁</p>
                    <p className='aboutTextPlaypen' id='char9'>&</p>
                    <p className='aboutTextCursive' id='char10'>creating...anything!</p>
                </div>
                <div className='aboutText' id='aboutContact'>
                    <p style={{margin:'0px'}}>let's get in touch! email me at</p>
                    <p style={{fontSize: '24px'}}>
                        contact [@] graceis [.] online
                    </p>
                </div>
            </div>
        </div>
    )
}