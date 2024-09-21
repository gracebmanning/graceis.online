import './About.css';
import resume from '../../documents/resume.pdf';
import { daisiesFlipped, daisiesBottom, envelope, backarrow } from '../../assets/assets';
import { LiaQuestionCircle } from "react-icons/lia";
// <LiaQuestionCircle />

let skills = [
    {
        skill: 'touchdesigner',
        link: 'https://derivative.ca/'
    }, 
    {
        skill: 'figma',
        link: 'https://www.figma.com/'
    },
    {
        skill: 'ui design'
    },
    {
        skill: 'photoshop'
    },
    {
        skill: 'html',
    },
    {
        skill: 'css',
    },
    {
        skill: 'javascript',
    },
    {
        skill: 'typescript'
    },
    {
        skill: 'react',
        link: 'https://react.dev/'
    },
    {
        skill: 'angular',
        link: 'https://angular.dev/'
    },
    {
        skill: 'sewing & other fiber arts'
    }
]

let likes = ['web development', 'visual design/development', 'the internet', 'marketing/branding', 'fonts (and graphic design in general)'];

export default function About(){
    return(
        <div>
            <img className='backgroundImg topRight' id='aboutDaisies' src={daisiesFlipped} alt='two daisies with smaller purple blooms and surrounding greenery' />
            <img className='backgroundImg bottomLeft' id='aboutDaisiesBottom' src={daisiesBottom} alt='' />
            <div className='container aboutContainer'>
                <div className='aboutText'>
                    <div className='aboutHeader'>
                        <a className='backLink' href='/'>
                            <img src={backarrow} alt='sketch outline of arrow pointing left' />
                            go home
                        </a>
                        <div>
                            <h2>about me</h2>
                            <h1>grace manning</h1>
                        </div>
                    </div>
                    <p id='aboutTagline'>
                        hello! I am a creative technologist with a b.s. in computer science. <a style={{color: 'black'}} href={resume} target='_blank' rel='noreferrer'>view resume</a>
                    </p>
                </div>
                
                <div className='aboutText'>
                    <h3 className='listTitle' id='likes'>my favorite things include:</h3>
                    <ul>
                        {likes.map(like => <li key={like}>{like}</li>)}
                    </ul>
                </div>
                <div className='aboutText'>
                    <h3 className='listTitle' id='skills'>what i can do:</h3>
                    <ul>
                    {skills.map(elem => {
                        if(elem.link){
                            return(
                                <li>
                                    {elem.skill}
                                    <a className='skillLink' href={elem.link} target='_blank' rel='noreferrer'>
                                        <LiaQuestionCircle className='skillQuestionIcon' />
                                    </a>
                                </li>
                            )
                        } else{
                            return(
                                <li>{elem.skill}</li>
                            )
                        }
                    })}
                    </ul>
                </div>
                <div className='aboutText emailBox'>
                    <img id='envelope' src={envelope} alt='white envelope with pink heart seal' />
                    <p id='aboutEmail'>
                        contact [@] graceis [.] online
                    </p>
                </div>
            </div>
        </div>
    )
}