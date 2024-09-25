import './Projects.css';
import { daisiesFlipped, daisiesBottom, backarrow, dinosaur } from '../../assets/assets';

export default function Projects(){
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
                        <h2>this is the</h2>
                        <h1>projects page</h1>
                    </div>
                    <img id='dinosaur' src={dinosaur} alt='green dinosaur toy' />
                </div>
                <div className='subpageText'>
                    Lorem ipsum...
                </div>
            </div>
        </div>
    )
}