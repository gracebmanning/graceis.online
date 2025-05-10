import {embroideredstar, ladybug, lunamoth, fish, bear, strawberry} from '../../assets/assets';
import { Link, NavLink } from 'react-router-dom';


const navList = [
    {
        name: 'art',
        icon: embroideredstar,
        type: 'internal',
        link: '/art'
    },
    {
        name: 'projects',
        icon: ladybug,
        type: 'internal',
        link: '/projects'
    },
    {
        name: 'about',
        icon: lunamoth,
        type: 'internal',
        link: '/about'
    },
    {
        name: 'blog',
        icon: fish,
        type: 'internal',
        link: '/blog'
    },
    {
        name: 'instagram',
        icon: bear,
        type: 'external',
        link: 'https://www.instagram.com/graceis.online/'
    },
    {
        name: 'youtube',
        icon: strawberry,
        type: 'external',
        link: 'https://www.youtube.com/@graceis.online'
    },
]

export const HomeNav = () => {
  return (
    <nav className="homeNav">
        <ul>
            {navList.map((item, index) => {
                return(
                    <ul key={index}>
                        {item.type === 'internal' 
                        ? 
                            <Link className='homeNavButton' to={item.link}>
                                <img className='homeNavImage' src={item.icon} alt='' />
                                <p className='homeNavText'>{item.name}</p>
                            </Link>
                        :   <a className='homeNavButton' href={item.link} target="_blank" rel="noreferrer">
                                <img className='homeNavImage' src={item.icon} alt='' />
                                <p className='homeNavText'>{item.name}</p>
                            </a>
                        }
                    </ul>
                )
            })}
        </ul>
    </nav>
  )
}

export const Navbar = () => {
  return (
    <nav>
        <ul>
            {navList.map((item, index) => {
                return(
                    <ul key={index}>
                        {item.type === 'internal' 
                        ? 
                            <NavLink className="sideNavButton" activeClassName="sideNavButtonActive" to={item.link}>
                                <img src={item.icon} alt='' />
                                <p>{item.name}</p>
                            </NavLink>
                        :   <a href={item.link} target="_blank" rel="noreferrer">
                                <img src={item.icon} alt='' />
                                <p>{item.name}</p>
                            </a>
                        }
                    </ul>
                )
            })}
        </ul>
    </nav>
  )
}