import './Explore.css';
import { backarrow, dinosaur, internetarchive, winClassic } from '../../assets/assets';
import { daisiesFlipped, daisiesBottom } from '../../assets/backgrounds/backgrounds';

export default function Explore(){
    return(
        <div>
            <img className='backgroundImg topRight subpageDaisies' src={daisiesFlipped} alt='two daisies with smaller purple blooms and surrounding greenery' />
            <img className='backgroundImg bottomLeft subpageDaisiesBottom' src={daisiesBottom} alt='' />
            <div className='container exploreContainer'>
                <div className='subpageText'>
                    <a className='backLink' href='/'>
                        <img src={backarrow} alt='sketch outline of arrow pointing left' />
                        go home
                    </a>
                </div>
                <div className='subpageText subpageHeader exploreHeader'>
                    <div className='subpageHeaderText'>
                        <h2>this is the</h2>
                        <h1>explore page</h1>
                    </div>
                    <img id='dinosaur' src={dinosaur} alt='green dinosaur toy' />
                </div>
                <div className='exploreContentBox'>
                    <h3>explore the Internet Archive</h3>
                    <div className='exploreLink'>
                        <img id='internetarchive' src={internetarchive} alt='Internet Archive Logo. black roman architecture style building.' />
                        <p>
                            the <a href='https://archive.org/' target='_blank' rel='noreferrer'>Internet Archive</a> is a digital library preserving the history of the World Wide Web. 
                            as someone who loves internet history and culture, I really appreciate the Internet Archive - including the <a href='https://web.archive.org/' target='_blank' rel='noreferrer'>Wayback Machine</a>, which allows you to explore all the websites the Internet Archive has saved since it began in 1996. 
                            check it out!
                        </p>
                    </div>

                    <h3>if you're weirdly obsessed with old Microsoft Windows lore...</h3>
                    <div className='exploreLink'>
                        <img id='internetarchive' src={winClassic} alt='Internet Archive Logo. black roman architecture style building.' />
                        <p>
                            and would like to revert your OS to Windows 98, 2000, XP, Vista, or one of the other nostalgia-inducing versions, and need extremely niche tech support regarding said OS: you may enjoy the <a href='https://winclassic.net/' target='_blank' rel='noreferrer'>WinClassic</a> forum!
                        </p>
                    </div>

                </div>
                
            </div>
        </div>
    )
}