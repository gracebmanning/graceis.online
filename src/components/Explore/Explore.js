import './Explore.css';
import { daisiesFlipped, daisiesBottom, backarrow, dinosaur, internetarchive } from '../../assets/assets';

export default function Explore(){
    return(
        <div>
            <img className='backgroundImg topRight subpageDaisies' src={daisiesFlipped} alt='two daisies with smaller purple blooms and surrounding greenery' />
            <img className='backgroundImg bottomLeft subpageDaisiesBottom' src={daisiesBottom} alt='' />
            <div className='container subpageContainer exploreContainer'>
                <div className='subpageText'>
                    <a className='backLink' href='/'>
                        <img src={backarrow} alt='sketch outline of arrow pointing left' />
                        go home
                    </a>
                </div>
                <div className='subpageText subpageHeader'>
                    <div className='subpageHeaderText'>
                        <h2>this is the</h2>
                        <h1>explore page</h1>
                    </div>
                    <img id='dinosaur' src={dinosaur} alt='green dinosaur toy' />
                </div>
                <div className='subpageText'>
                    <div className='exploreLink'>
                        <img id='internetarchive' src={internetarchive} alt='Internet Archive Logo. black roman architecture style building.' />
                        <a href='https://archive.org/' target='_blank' rel='noreferrer'>
                            <p className='textHandwritten'>internet archive</p>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}