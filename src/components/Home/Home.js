import './Home.css';
import { fish, ladybug, embroideredstar, strawberry, lunamoth } from '../../assets/assets.js';
import { whiteRabbit, daisies, daisiesBottomFlipped } from '../../assets/backgrounds/backgrounds';
import { Link } from 'react-router-dom';

export default function Home2(){
    return(
        <div style={{width: '100vw', height: '100vh', overflow: 'hidden'}}>
            <img className='backgroundImg topLeft' id='homeDaisies' src={daisies} alt='two daisies with smaller purple blooms and surrounding greenery' />
            
            <div className='container homeContainer'>
                <div className='headerText'>
                    <h1 id='title'>grace manning</h1>
                    <h2 id='tagline'>creative technologist & internet dweller</h2>
                </div>
                <div className='navContainer'>
                    <div className='navRow'>
                        <Link className='navButton' id='aboutButton' to='/about'>
                            <img className='navImage' id='fishImage' src={fish} alt='silver fish with blue and yellow accents' />
                            <p className='navText'>about</p>
                        </Link>
                        <Link className='navButton' id='projectsButton' to='/projects'>
                            <img className='navImage' id='ladybugImage' src={ladybug} alt='' />
                            <p className='navText'>projects</p>
                        </Link>
                    </div>
                    <div className='navRow'>
                        <Link className='navButton' id='exploreButton' to='/explore'>
                            <img className='navImage' src={embroideredstar} alt='' />
                            <p className='navText'>explore</p>
                        </Link>
                    </div>
                    <div className='navRow'>
                        <a className='navButton' id='youtubeButton' href='https://www.youtube.com/@graceis.online' target='_blank' rel='noreferrer'>
                            <img className='navImage' src={strawberry} alt='' />
                            <p className='navText'>youtube</p>
                        </a>
                        <a className='navButton' id='instagramButton' href='https://www.instagram.com/graceis.online/' target='_blank' rel='noreferrer'>
                            <img className='navImage' id='lunamothImage' src={lunamoth} alt='' />
                            <p className='navText'>instagram</p>
                        </a>
                    </div>
                </div>
                <h2 id='contactText'>contact [@] graceis [.] online</h2>
            </div>
            <img className='backgroundImg bottomRight' id='homeDaisiesBottom' src={daisiesBottomFlipped} alt='' />
            <img className='bottomRight' id='whiteRabbit' src={whiteRabbit} alt='' />
        </div>
    )
}