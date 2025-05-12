import './Surprise.css';
import { BasicLayout } from '../../layouts/BasicLayout';
import { bunny, chickEgg1, chickEgg2 } from '../../assets/assets';

const content = 
    <div className='surpriseContainer'>
        <h1>surprise! you found an easter egg :-)</h1>
        <img src={bunny} alt='' />
        <img src={chickEgg1} alt='' />
        <img src={chickEgg2} alt='' />
    </div>

export default function Surprise(){
    return(
        <BasicLayout content={content} />
    )
}