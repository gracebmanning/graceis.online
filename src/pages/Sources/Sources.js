import './Sources.css';
import { MdArrowOutward } from "react-icons/md";
import { BasicLayout } from '../../layouts/BasicLayout';
import { allImages } from '../../assets/assets';

const content = 
    <div className='sourcesContentBox'>
        all of my images sources, in one place.
        <ul className='sourcesList'>
            {allImages.map((elem, index)=>
                <li className='sourcesListItem' key={index}>
                    <img src={elem.src} alt={elem.alt}/>
                    <div>
                        <p>source:</p>
                        <p>{(elem.source==='internal') ? `${elem.link}` : <a href={elem.link} target='_blank' rel='noreferrer'>external link<MdArrowOutward/></a>}</p>
                    </div>
                </li>)}
        </ul>
    </div>

export default function Sources(){
    return(
        <BasicLayout title={"Sources"} content={content} />
    )
}