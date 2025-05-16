import './Home.css';
import { whiteRabbit, daisies, daisiesBottomFlipped } from '../../assets/assets.js';
import { HomeNav } from '../../components/Navigation/Navigation.js';

export default function Home(){
    return(
        <div style={{width: '100vw', height: '100vh', overflow: 'hidden'}}>
            <img className='backgroundImg topLeft' id='homeDaisies' src={daisies.src} alt={daisies.alt} />
            
            <div className='container homeContainer'>
                <div className='headerText'>
                    <h1 id='title'>grace manning</h1>
                    <h2 id='tagline'>creative technologist & software engineer</h2>
                </div>
                <HomeNav/>
                <h2 id='contactText'>contact [@] graceis.online</h2>
            </div>
            <img className='backgroundImg bottomRight' id='homeDaisiesBottom' src={daisiesBottomFlipped.src} alt={daisiesBottomFlipped.alt} />
            <img className='bottomRight' id='whiteRabbit' src={whiteRabbit.src} alt={whiteRabbit.alt} />
        </div>
    )
}