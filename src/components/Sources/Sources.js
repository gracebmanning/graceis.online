import './Sources.css';
import { daisies } from "../../assets/backgrounds/backgrounds";
import { backarrow, fish, ladybug, embroideredstar, strawberry, lunamoth, envelope, bear, frame, pinkBow, dinosaur } from '../../assets/assets';
import { MdArrowOutward } from "react-icons/md";
import { BasicLayout } from '../../layouts/BasicLayout';

let assets = [
    // NAVIGATION
    {
        asset: backarrow,
        source: 'me',
        link: 'drawn by me',
        alt: 'black outlined arrow pointing left'
    },

    // HOME PAGE ICONS
    {
        asset: fish,
        source: 'external',
        link: 'https://za.pinterest.com/pin/595741856993273761/',
        alt: ''
    },
    {
        asset: ladybug,
        source: 'external',
        link: 'https://spectrum.ieee.org/microled-displays-could-show-up-in-products-as-soon-as-2020',
        alt: ''
    },
    {
        asset: embroideredstar,
        source: 'external',
        link: 'https://www.walmart.com/ip/Wrights-Iron-On-Appliques-3-Pkg-Silver-Metallic-Stars-Pk-3-Wrights/43984845',
        alt: ''
    },
    {
        asset: strawberry,
        source: 'external',
        link: 'https://www.gardeningknowhow.com/edible/fruits/strawberry/growing-jewel-strawberries.htm',
        alt: ''
    },
    {
        asset: lunamoth,
        source: 'external',
        link: 'https://www.pinterest.com/pin/5066618328582739/',
        alt: ''
    },

    // ABOUT PAGE
    {
        asset: envelope,
        source: 'me',
        link: 'drawn by me',
        alt: ''
    },
    {
        asset: bear,
        source: 'external',
        link: 'https://www.macys.com/shop/product/aurora-large-bonny-bear-snuggly-plush-toy-tan-16?ID=17147799',
        alt: ''
    },

    // PROJECTS PAGE
    {
        asset: frame,
        source: 'external',
        link: 'https://www.walmart.com/ip/Oval-Picture-Frames-Vintage-Gold-Frame-Mini-Picture-Frames-Small-Vingate-Picture-Frames-Gallery-Wall-Frames-Ornate-Frames-Antique-Picture-Frames/5341409853',
        alt: ''
    },
    {
        asset: pinkBow,
        source: 'external',
        link: 'https://fairyprincesspets.com/products/add-bows',
        alt: ''
    },

    // EXPLORE PAGE
    {
        asset: dinosaur,
        source: 'external',
        link: 'https://www.acehardware.com/departments/home-and-decor/novelty-items/toys-and-games/9060321',
        alt: ''
    },
    
    // BACKGROUNDS
    {
        asset: daisies,
        source: 'me',
        link: 'my personal stationery collection; artist unknown',
        alt: ''
    },

]

const content = 
    <div className='sourcesContentBox'>
        i am working on compiling all sources for my images into a list. thanks for your patience!
        <ul className='sourcesList'>
            {assets.map((elem, index)=><li className='sourcesListItem' key={index}>
                    <img src={elem.asset} alt={elem.alt}/>
                    source: {(elem.source==='me') ? `${elem.link}` : <a href={elem.link} target='_blank' rel='noreferrer'>external link<MdArrowOutward/></a>}
                </li>)}
        </ul>
    </div>

export default function Sources(){
    return(
        <BasicLayout content={content} />
    )
}