import './Navigation.css';
import {embroideredstar, ladybug, lunamoth, fish, bear, strawberry} from '../../assets/assets';
import { Link, NavLink } from 'react-router-dom';

const navList = [
    {
        name: 'art',
        icon: embroideredstar,
        iconID: 'star',
        type: 'internal',
        link: '/art'
    },
    {
        name: 'projects',
        icon: ladybug,
        iconID: 'ladybug',
        type: 'internal',
        link: '/projects'
    },
    {
        name: 'about',
        icon: lunamoth,
        iconID: 'lunamoth',
        type: 'internal',
        link: '/about'
    },
    {
        name: 'blog',
        icon: fish,
        iconID: 'fish',
        type: 'internal',
        link: '/blog'
    },
    {
        name: 'instagram',
        icon: bear,
        iconID: 'bear',
        type: 'external',
        link: 'https://www.instagram.com/graceis.online/'
    },
    {
        name: 'youtube',
        icon: strawberry,
        iconID: 'strawberry',
        type: 'external',
        link: 'https://www.youtube.com/@graceis.online'
    },
]

export const HomeNav = () => {
  return (
    <nav className="homeNav">
        <ul className="homeNavItems">
            {navList.map((item, index) => {
                return(
                    <li key={index} className='homeNavButton' id={`${item.iconID}Home`}>
                        {item.type === 'internal' 
                        ? 
                            <Link className="homeNavLink" to={item.link}>
                                <img className='homeNavImage' src={item.icon} alt='' />
                                <p className='homeNavText'>{item.name}</p>
                            </Link>
                        :   <a className="homeNavLink" href={item.link} target="_blank" rel="noreferrer">
                                <img className='homeNavImage' src={item.icon} alt='' />
                                <p className='homeNavText'>{item.name}</p>
                            </a>
                        }
                    </li>
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
                    <li key={index}>
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
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}