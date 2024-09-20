import './Projects.css';
import { daisiesFlipped, daisiesBottom, backarrow } from '../../assets/assets';

export default function Projects(){
    return(
        <div>
            <img className='backgroundImg topRight' id='projectsDaisies' src={daisiesFlipped} alt='two daisies with smaller purple blooms and surrounding greenery' />
            <img className='backgroundImg bottomLeft' id='projectsDaisiesBottom' src={daisiesBottom} alt='' />
            <div className='container projectsContainer'>
                <div className='projectsText'>
                    <div className='projectsHeader'>
                        <a className='backLink' href='/'>
                            <img src={backarrow} alt='sketch outline of arrow pointing left' />
                            go home
                        </a>
                        <div>
                            <h2>projects page</h2>
                            <h1>is under construction</h1>
                        </div>
                    </div>
                    <p style={{marginTop: '10px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet pulvinar nibh. Curabitur scelerisque orci et scelerisque sollicitudin.
                    </p>
                </div>
            </div>
        </div>
    )
}