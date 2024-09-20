import './About.css';
import { daisiesFlipped, daisiesBottom, envelope } from '../../assets/assets';

let skills = [
    {
        title: 'visual',
        list: ['touchdesigner']
    },
    {
        title: 'design',
        list: ['figma', 'photoshop']
    },
    {
        title: 'web dev',
        list: ['html', 'css', 'javascript', 'typescript', 'react', 'angular']
    },
    {
        title: 'app dev',
        list: ['flutter/dart', 'android studio', 'xcode']
    },
    {
        title: 'other',
        list: ['python', 'c++', 'c', 'java', 'racket']
    },
    {
        title: 'data',
        list: ['mysql', 'postgresql', 'mongodb', 'redis']
    },
    {
        title: 'tools',
        list: ['git/github', 'aws', 'squarespace', 'wordpress']
    }
]

let likes = ['web development', 'like1', 'this is another', 'short', 'this is a long one'];

export default function About(){
    return(
        <div>
            <img className='backgroundImg flipped' id='daisies' src={daisiesFlipped} alt='two daisies with smaller purple blooms and surrounding greenery' />
            <img className='bottomBackgroundImages' id='daisiesBottom' src={daisiesBottom} alt='' />
            <div className='container aboutContainer'>
                <div className='aboutText'>
                    <h2>about me</h2>
                    <h1>grace manning</h1>
                    <p style={{marginTop: '10px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet pulvinar nibh. Curabitur scelerisque orci et scelerisque sollicitudin.
                    </p>
                </div>
                <div className='aboutText emailBox'>
                    <img id='envelope' src={envelope} />
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
                            <p style={{padding: '0px'}}>{item.title}</p>
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