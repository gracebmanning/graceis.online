import './Home.css';
import { fish, ladybug, embroideredstar, strawberry, lunamoth, whiteRabbit, daisies, daisiesBottomFlipped } from '../../assets/assets.js';

export default function Home2(){
    return(
        <div style={{width: '100vw', height: '100vh', overflow: 'hidden'}}>
            <img className='backgroundImg topLeft' id='homeDaisies' src={daisies} alt='two daisies with smaller purple blooms and surrounding greenery' />
            
            <div className='container homeContainer'>
                <div className='headerText2'>
                    <h1 id='title'>grace manning</h1>
                    <h2 id='tagline'>creative technologist & internet dweller</h2>
                </div>
                <div className='navContainer'>
                    <div className='navRow'>
                        <a className='navButton2' id='aboutButton' href='/about'>
                            <img className='navImage' id='fishImage' src={fish} alt='silver fish with blue and yellow accents' />
                            <p className='navText'>about</p>
                        </a>
                        <a className='navButton2' id='projectsButton' href='/projects'>
                            <img className='navImage' id='ladybugImage' src={ladybug} alt='' />
                            <p className='navText'>projects</p>
                        </a>
                    </div>
                    <div className='navRow'>
                        <a className='navButton2' id='exploreButton' href='/explore'>
                            <img className='navImage' src={embroideredstar} alt='' />
                            <p className='navText'>explore</p>
                        </a>
                    </div>
                    <div className='navRow'>
                        <a className='navButton2' id='youtubeButton' href='/'>
                            <img className='navImage' src={strawberry} alt='' />
                            <p className='navText'>youtube</p>
                        </a>
                        <a className='navButton2' id='instagramButton' href='https://www.instagram.com/graceis0nline/' target='_blank' rel='noreferrer'>
                            <img className='navImage' id='lunamothImage' src={lunamoth} alt='' />
                            <p className='navText'>instagram</p>
                        </a>
                    </div>
                </div>
                <h2 id='contactText'>contact [at] graceis [dot] online</h2>
            </div>
            <img className='backgroundImg bottomRight' id='homeDaisiesBottom' src={daisiesBottomFlipped} alt='' />
            <img className='bottomRight' id='whiteRabbit' src={whiteRabbit} alt='' />
        </div>
    )
}