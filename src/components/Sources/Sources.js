import './Sources.css';
import { daisies } from "../../assets/backgrounds/backgrounds";
import { backarrow, dinosaur } from '../../assets/assets';

export default function Sources(){
    return(
        <div style={{width: '100vw', height: '100vh', overflow: 'hidden'}}>
            <img className='backgroundImg topLeft' id='homeDaisies' src={daisies} alt='two daisies with smaller purple blooms and surrounding greenery' />
            <div className='container sourcesContainer'>
                <div className='subpageText'>
                    <a className='backLink' href='/'>
                        <img src={backarrow} alt='sketch outline of arrow pointing left' />
                        go home
                    </a>
                </div>
                <div className='subpageText subpageHeader sourcesHeader'>
                    <div className='subpageHeaderText'>
                        <h2>this is the</h2>
                        <h1>sources page</h1>
                    </div>
                    <img id='dinosaur' src={dinosaur} alt='green dinosaur toy' />
                </div>
                <div className='sourcesContentBox'>
                    i am working on compiling all sources for my images into a list. thanks for your patience!
                </div>
            </div>
        </div>
    )
}