import './Surprise.css';
import { daisies } from "../../assets/backgrounds/backgrounds"

export default function Surprise(){
    return(
        <div style={{width: '100vw', height: '100vh', overflow: 'hidden'}}>
            <img className='backgroundImg topLeft' id='homeDaisies' src={daisies} alt='two daisies with smaller purple blooms and surrounding greenery' />
            <div className='container surpriseContainer'>
                <h1>surprise! you found an easter egg :-)</h1>
            </div>
        </div>
    )
}