import './About.css';
import { backarrow, arrow, bear } from '../../assets/assets';
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
                <div className='subpageText subpageHeader'>
                    <div className='subpageHeaderText'>
                        <h2>about me</h2>
                        <h1>grace manning</h1>
                    </div>
                    <img id='teddybear' src={bear} alt='brown teddy bear' />
                </div>
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
                <div className='subpageText' id='aboutContact'>
                    <p style={{margin:'0px'}}>let's get in touch! email me at</p>
                    <p style={{fontSize: '24px'}}>
                        contact [@] graceis [.] online
                    </p>
                </div>
            </div>
        </div>
    )
}