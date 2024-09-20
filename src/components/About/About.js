import './About.css';
import resume from '../../documents/Manning_Grace_resume_public.pdf';
import { daisiesFlipped, daisiesBottom, envelope, backarrow } from '../../assets/assets';

let skills = [
    {
        title: 'visual',
        list: ['touchdesigner']
    },
    {
        title: 'design',
        list: ['figma,', 'photoshop,']
    },
    {
        title: 'web dev',
        list: ['html,', 'css,', 'javascript,', 'typescript,', 'react,', 'angular']
    },
    {
        title: 'also',
        list: ['i have a b.s. in computer science!', <a style={{color: 'black'}} href={resume} target='_blank' rel='noreferrer'>view resume</a>]
    },
]

let likes = ['web development', 'visual development', 'the internet', 'ui design'];

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
                    <p style={{marginTop: '10px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet pulvinar nibh. Curabitur scelerisque orci et scelerisque sollicitudin.
                    </p>
                </div>
                <div className='aboutText emailBox'>
                    <img id='envelope' src={envelope} alt='white envelope with pink heart seal' />
                    <p id='aboutEmail'>
                        <b>contact [at] graceis [dot] online</b>
                    </p>
                </div>
                <div className='aboutText'>
                    <h3>my favorite things include:</h3>
                    <ul id='likes'>
                        {likes.map(like => <li key={like}>{like}</li>)}
                    </ul>
                </div>
                <div className='aboutText'>
                    <h3>what i can do:</h3>
                    {skills.map((item) =>{
                    return(
                        <div className='skills' key={item.title}>
                            <p className='skillsListTitle'>{item.title}</p>
                            <ul className='skillsList'>
                                {item.list.map(skill => <li key={skill}>{skill}</li>)}
                            </ul>
                        </div>
                    )
                    })}
                </div>
            </div>
        </div>
    )
}