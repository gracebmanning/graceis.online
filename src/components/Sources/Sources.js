import './Sources.css';
import { daisies } from "../../assets/backgrounds/backgrounds";
import { backarrow, fish, ladybug, embroideredstar, strawberry, lunamoth, envelope, bear, frame, pinkBow, dinosaur, internetarchive, winClassic } from '../../assets/assets';

let assets = [
    // NAVIGATION
    {
        asset: backarrow,
        source: 'me',
        alt: ''
    },

    // HOME PAGE ICONS
    {
        asset: fish,
        source: '',
        alt: ''
    },
    {
        asset: ladybug,
        source: '',
        alt: ''
    },
    {
        asset: embroideredstar,
        source: '',
        alt: ''
    },
    {
        asset: strawberry,
        source: '',
        alt: ''
    },
    {
        asset: lunamoth,
        source: '',
        alt: ''
    },

    // ABOUT PAGE
    {
        asset: envelope,
        source: 'me',
        alt: ''
    },
    {
        asset: bear,
        source: '',
        alt: ''
    },

    // PROJECTS PAGE
    {
        asset: frame,
        source: ''
    },
    {
        asset: pinkBow,
        source: ''
    },

    // EXPLORE PAGE
    {
        asset: dinosaur,
        source: 'https://www.acehardware.com/departments/home-and-decor/novelty-items/toys-and-games/9060321'
    },
    {
        asset: internetarchive,
        source: ''
    },
    {
        asset: winClassic,
        source: ''
    },
    
    // BACKGROUNDS
    {
        asset: daisies,
        source: 'my personal stationery collection; artist unknown',
        alt: ''
    },

]

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
                    <ul className='sourcesList'>
                        {assets.map((elem, index)=><li className='sourcesListItem' key={index}>
                                <img src={elem.asset} alt={elem.alt}/>
                                source: {(elem.source==='me' || elem.source==='my personal stationery collection; artist unknown') ? `${elem.source}` : <a href={elem.source} target='_blank' rel='noreferrer'>external link</a>}
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}