import './Home.css';
import { fish, ladybug, embroideredstar, strawberry, lunamoth, whiteRabbit, daisies, daisiesBottomFlipped } from '../../assets/assets.js';

export default function Home(){
    return(
        <div>
            <img className='backgroundImg topLeft' src={daisies} alt='two daisies with smaller purple blooms and surrounding greenery' />
            <div className='container homeContainer'>
                <div className='headerText'>
                    <h1 id='title'>grace manning</h1>
                    <h2 id='tagline'>[tagline]</h2>
                </div>
                <a className='navButton' id='aboutButton' href='/about'>
                    <img className='navImage' id='fishImage' src={fish} alt='silver fish with blue and yellow accents' />
                    <p className='navText'>about</p>
                </a>
                <a className='navButton' id='projectsButton' href='/projects'>
                    <img className='navImage' id='ladybugImage' src={ladybug} alt='' />
                    <p className='navText'>projects</p>
                </a>
                <a className='navButton' id='exploreButton' href='/explore'>
                    <img className='navImage' src={embroideredstar} alt='' />
                    <p className='navText'>explore</p>
                </a>
                <a className='navButton' id='youtubeButton' href='/' target='_blank' rel='noreferrer'>
                    <img className='navImage' src={strawberry} alt='' />
                    <p className='navText'>youtube</p>
                </a>
                <a className='navButton' id='instagramButton' href='https://www.instagram.com/graceis0nline/' target='_blank' rel='noreferrer'>
                    <img className='navImage' id='lunamothImage' src={lunamoth} alt='' />
                    <p className='navText'>instagram</p>
                </a>
                <h2 id='contactText'>contact [at] graceis [dot] online</h2>
                <img className='backgroundImg bottomRight' id='homeDaisiesBottom' src={daisiesBottomFlipped} alt='' />
                <img className='bottomRight' id='whiteRabbit' src={whiteRabbit} alt='' />
            </div>
        </div>
    )
}