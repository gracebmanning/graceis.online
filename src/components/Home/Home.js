import './Home.css';
import { fish, ladybug, embroideredstar, strawberry, lunamoth, whiteRabbit, daisiesBottom } from '../../assets/assets.js';

export default function Home(){
    return(
        <div className='container'>
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
            <a className='navButton' id='youtubeButton' href='/'>
                <img className='navImage' src={strawberry} alt='' />
                <p className='navText'>youtube</p>
            </a>
            <a className='navButton' id='instagramButton' href='/'>
                <img className='navImage' id='lunamothImage' src={lunamoth} alt='' />
                <p className='navText'>instagram</p>
            </a>
            <h2 id='contactText'>contact [at] graceis [dot] online</h2>
            <img className='backgroundImages' id='daisiesBottom' src={daisiesBottom} alt='' />
            <img className='backgroundImages' id='whiteRabbit' src={whiteRabbit} alt='' />
        </div>
    )
}