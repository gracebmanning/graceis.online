// BACKGROUNDS
import daisies from './backgrounds/daisies.jpg';
import daisies_transparent from './backgrounds/daisies_50opacity.jpg';
import daisiesFlipped from './backgrounds/daisiesFlipped.jpg';
import daisiesFlipped_transparent from './backgrounds/daisiesFlipped_50opacity.jpg';
import daisiesBottom from './backgrounds/daisiesBottom.jpg';
import daisiesBottom_transparent from './backgrounds/daisiesBottom_50opacity.jpg';
import daisiesBottomFlipped from './backgrounds/daisiesBottomFlipped.jpg';
import daisiesBottomFlipped_transparent from './backgrounds/daisiesBottomFlipped_50opacity.jpg';
import whiteRabbit from './backgrounds/white-rabbit.png';

// THUMBNAILS
import gracemanningCom from './thumbnails/grace-manning.png';
import emmygardnerOnline from './thumbnails/emmygardner-online.png';
import classifiedsLol from './thumbnails/classifieds-lol.png';
import gracesPortal from './thumbnails/graces-portal.png';
import itneedsmorecolor from './thumbnails/itneedsmorecolor.png';
import graceIsOnline from './thumbnails/graceis-online.png';

// ICONS
import arrow from './arrow.svg';
import backarrow from './backarrow.svg';
import bear from './bear.png';
import embroideredstar from './embroidered-star.png';
import envelope from './envelope.svg';
import fish from './fish.png';
import ladybug from './ladybug.png';
import lunamoth from './lunamoth.png';
import strawberry from './strawberry.png';

// OTHER
import bunny from './other/bunny.gif';
import chickEgg1 from './other/chick-egg1.gif';
import chickEgg2 from './other/chick-egg2.gif';
import grace from './other/grace3.jpg';
import wiggleLine from './other/wiggleLine.svg';

// SOURCE IS EITHER INTERNAL OR EXTERNAL
const images = {
    // BACKGROUNDS
    daisies: {
        src: daisies,
        alt: '',
        source: 'internal', 
        link: 'my personal stationery collection; artist unknown'
    },
    daisies_transparent: {
        src: daisies_transparent,
        alt: '',
        source: 'internal', 
        link: 'my personal stationery collection; artist unknown'
    },
    daisiesFlipped: {
        src: daisiesFlipped,
        alt: '',
        source: 'internal', 
        link: 'my personal stationery collection; artist unknown'
    },
    daisiesFlipped_transparent: {
        src: daisiesFlipped_transparent,
        alt: '',
        source: 'internal', 
        link: 'my personal stationery collection; artist unknown'
    },
    daisiesBottom: {
        src: daisiesBottom,
        alt: '',
        source: 'internal', 
        link: 'my personal stationery collection; artist unknown'
    },
    daisiesBottom_transparent: {
        src: daisiesBottom_transparent,
        alt: '',
        source: 'internal', 
        link: 'my personal stationery collection; artist unknown'
    },
    daisiesBottomFlipped: {
        src: daisiesBottomFlipped,
        alt: '',
        source: 'internal', 
        link: 'my personal stationery collection; artist unknown'
    },
    daisiesBottomFlipped_transparent: {
        src: daisiesBottomFlipped_transparent,
        alt: '',
        source: 'internal', 
        link: 'my personal stationery collection; artist unknown'
    },
    whiteRabbit: {
        src: whiteRabbit,
        alt: '',
        source: '', 
        link: ''
    },

    // THUMBNAILS
    gracemanningCom:{
        src: gracemanningCom,
        alt: '',
        source: '', 
        link: ''
    },
    emmygardnerOnline:{
        src: emmygardnerOnline,
        alt: '',
        source: '', 
        link: ''
    },
    classifiedsLol:{
        src: classifiedsLol,
        alt: '',
        source: '', 
        link: ''
    },
    gracesPortal:{
        src: gracesPortal,
        alt: '',
        source: '', 
        link: ''
    },
    itneedsmorecolor:{
        src: itneedsmorecolor,
        alt: '',
        source: '', 
        link: ''
    },
    graceIsOnline:{
        src: graceIsOnline,
        alt: '',
        source: '', 
        link: ''
    },

    // ICONS
    arrow:{
        src: arrow,
        alt: '',
        source: 'internal', 
        link: 'drawn by me'
    },
    backarrow:{
        src: backarrow,
        alt: 'black outlined arrow pointing left',
        source: 'internal', 
        link: 'drawn by me'
    },
    bear:{
        src: bear,
        alt: '',
        source: 'external', 
        link: 'https://www.macys.com/shop/product/aurora-large-bonny-bear-snuggly-plush-toy-tan-16?ID=17147799'
    },
    embroideredstar:{
        src: embroideredstar,
        alt: '',
        source: 'external', 
        link: 'https://www.walmart.com/ip/Wrights-Iron-On-Appliques-3-Pkg-Silver-Metallic-Stars-Pk-3-Wrights/43984845'
    },
    envelope:{
        src: envelope,
        alt: '',
        source: 'internal', 
        link: 'drawn by me'
    },
    fish:{
        src: fish,
        alt: '',
        source: 'external', 
        link: 'https://za.pinterest.com/pin/595741856993273761/'
    },
    ladybug:{
        src: ladybug,
        alt: '',
        source: 'external', 
        link: 'https://spectrum.ieee.org/microled-displays-could-show-up-in-products-as-soon-as-2020'
    },
    lunamoth:{
        src: lunamoth,
        alt: '',
        source: 'external', 
        link: 'https://www.pinterest.com/pin/5066618328582739/'
    },
    strawberry:{
        src: strawberry,
        alt: '',
        source: 'external', 
        link: 'https://www.gardeningknowhow.com/edible/fruits/strawberry/growing-jewel-strawberries.htm'
    },

    // OTHER
    bunny:{
        src: bunny,
        alt: '',
        source: '', 
        link: ''
    },
    chickEgg1:{
        src: chickEgg1,
        alt: '',
        source: '', 
        link: ''
    },
    chickEgg2:{
        src: chickEgg2,
        alt: '',
        source: '', 
        link: ''
    },
    grace:{
        src: grace,
        alt: '',
        source: 'internal', 
        link: 'this is just a photo of me'
    },
    wiggleLine:{
        src: wiggleLine,
        alt: '',
        source: 'internal', 
        link: 'drawn by me'
    },
}

export default images;

/* ALTERNATIVE STRUCTURE

// Alternative imageData.js structure for better tree-shaking
import emmygardnerOnlineThumbnail from './images/emmygardnerOnlineThumbnail.jpg';
import specificProjectImage1 from './images/projects/specificProject1.png';

export const emmyGardnerOnlineThumb = {
    src: emmygardnerOnlineThumbnail,
    alt: '...',
    originalSource: '...'
};

export const projSpecific1 = {
    src: specificProjectImage1,
    alt: '...',
    originalSource: '...'
};

// You could still export an object of all for the Sources page
const allImages = { emmyGardnerOnlineThumb, projSpecific1, ... };
export { allImages };

*/