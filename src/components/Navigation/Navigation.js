import './homeNav.css';
import './navbar.css';
import {embroideredstar, ladybug, lunamoth, fish, bear, strawberry, wiggleLine} from '../../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const navList = [
    {
        name: 'projects',
        icon: ladybug,
        iconID: 'ladybug',
        type: 'internal',
        link: '/projects'
    },
    {
        name: 'just for fun',
        icon: embroideredstar,
        iconID: 'star',
        type: 'internal',
        link: '/just-for-fun'
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
                                <img className='homeNavImage' src={item.icon.src} alt={item.icon.alt} />
                                <p className='homeNavText'>{item.name}</p>
                            </Link>
                        :   <a className="homeNavLink" href={item.link} target="_blank" rel="noreferrer">
                                <img className='homeNavImage' src={item.icon.src} alt={item.icon.alt} />
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
    <nav className="navbar">
        <Link className="navbarHeaderText" to="/">
            <h1>grace manning</h1>
            <h2>creative technologist & software engineer</h2>
        </Link>
        <ul className="navbarItems">
            {navList.filter((item) => item.type === 'internal').map((item, index) => {
                return(
                    <li key={index} className="navbarButton" id={`${item.iconID}Navbar`}>
                        <NavLink className={({ isActive }) => (isActive ? "navbarLink navbarLinkActive" : "navbarLink")} to={item.link}>
                            <img className="navbarImage" src={item.icon.src} alt={item.icon.alt} />
                            <p className="navbarText">{item.name}</p>
                        </NavLink>
                    </li>
                )
            })}
            <img className="navbarDivider" src={wiggleLine.src} alt={wiggleLine.alt} />
            {navList.filter((item) => item.type === 'external').map((item, index) => {
                return(
                    <li key={index} className="navbarButton" id={`${item.iconID}Navbar`}>
                        <a className="navbarLink" href={item.link} target="_blank" rel="noreferrer">
                            <img className="navbarImage" src={item.icon.src} alt={item.icon.alt} />
                            <p className="navbarText">{item.name}</p>
                        </a>
                    </li>
                )
            })}
        </ul>
        <Link className="bottomLink" id="supportLink" to="/support">
            support my work
        </Link>
        <Link className="bottomLink" id="sourcesLink" to="/sources">
            image sources
        </Link>
    </nav>
  )
}

export const NavbarMobile = () => {
    const [expanded, setExpanded] = useState(false);

    return(
        <nav className={expanded ? 'navbarMobile expanded' : 'navbarMobile'}>
            <div className="navbarMobileHeader">
                <Link className="navbarHeaderText" to="/">
                    <h1>grace manning</h1>
                </Link>
                <LuMenu className={`navIcon ${expanded ? 'closed' : 'open'}`} onClick={() => {setExpanded(!expanded);}} />
                <IoClose className={`navIcon ${expanded ? 'open' : 'closed'}`} onClick={() => {setExpanded(!expanded);}} />
            </div>
            <div className={`navbarMobileContent ${expanded ? 'open' : 'closed'}`}>
                <ul className={expanded ? 'navbarItems expanded' : 'navbarItems'}>
                    {navList.filter((item) => item.type === 'internal').map((item, index) => {
                        return(
                            <li key={index} className="navbarButton" id={`${item.iconID}Navbar`}>
                                <NavLink className={({ isActive }) => (isActive ? "navbarLink navbarLinkActive" : "navbarLink")} to={item.link}>
                                    <img className="navbarImage" src={item.icon.src} alt={item.icon.alt} />
                                    <p className="navbarText">{item.name}</p>
                                </NavLink>
                            </li>
                        )
                    })}
                    <img className="navbarDivider" src={wiggleLine.src} alt={wiggleLine.alt} />
                    {navList.filter((item) => item.type === 'external').map((item, index) => {
                        return(
                            <li key={index} className="navbarButton" id={`${item.iconID}Navbar`}>
                                <a className="navbarLink" href={item.link} target="_blank" rel="noreferrer">
                                    <img className="navbarImage" src={item.icon.src} alt={item.icon.alt} />
                                    <p className="navbarText">{item.name}</p>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Link id="sourcesLink" to="/sources">
                    image sources
                </Link>
            </div>
        </nav>
    )
}