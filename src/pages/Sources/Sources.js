import './Sources.css';
import { MdArrowOutward } from "react-icons/md";
import { BasicLayout } from '../../layouts/BasicLayout';
import { allImages } from '../../assets/assets';

const content = 
    <div className='sourcesContentBox'>
        i am working on compiling all sources for my images into a list. thanks for your patience!
        <ul className='sourcesList'>
            {allImages.map((elem, index)=>
                <li className='sourcesListItem' key={index}>
                    <img src={elem.src} alt={elem.alt}/>
                    source: {(elem.source==='internal') ? `${elem.link}` : <a href={elem.link} target='_blank' rel='noreferrer'>external link<MdArrowOutward/></a>}
                </li>)}
        </ul>
    </div>

export default function Sources(){
    return(
        <BasicLayout content={content} />
    )
}