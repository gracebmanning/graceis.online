import './Explore.css';
import { daisiesFlipped, daisiesBottom, backarrow } from '../../assets/assets';

export default function Explore(){
    return(
        <div>
            <img className='backgroundImg topRight' id='exploreDaisies' src={daisiesFlipped} alt='two daisies with smaller purple blooms and surrounding greenery' />
            <img className='backgroundImg bottomLeft' id='exploreDaisiesBottom' src={daisiesBottom} alt='' />
            <div className='container exploreContainer'>
                <div className='exploreText'>
                    <div className='exploreHeader'>
                        <a className='backLink' href='/'>
                            <img src={backarrow} alt='sketch outline of arrow pointing left' />
                            go home
                        </a>
                        <div>
                            <h2>explore page</h2>
                            <h1>is under construction</h1>
                        </div>
                    </div>
                    <p style={{marginTop: '10px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet pulvinar nibh. Curabitur scelerisque orci et scelerisque sollicitudin.
                    </p>
                </div>
            </div>
        </div>
    )
}