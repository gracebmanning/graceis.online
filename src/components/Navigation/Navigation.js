import './homeNav.css';
import './navbar.css';
import {embroideredstar, ladybug, lunamoth, fish, bear, strawberry, wiggleLine} from '../../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const mainNavList = [
    {
        name: 'projects',
        icon: ladybug,
        iconID: 'ladybug',
        type: 'internal',
        link: '/projects',
        social: false
    },
    {
        name: 'just for fun',
        icon: embroideredstar,
        iconID: 'star',
        type: 'internal',
        link: '/just-for-fun',
        social: false
    },
    {
        name: 'about',
        icon: lunamoth,
        iconID: 'lunamoth',
        type: 'internal',
        link: '/about',
        social: false
    },
    {
        name: 'blog',
        icon: fish,
        iconID: 'fish',
        type: 'external',
        link: 'https://blog.graceis.online',
        social: false
    },
    {
        name: 'instagram',
        icon: bear,
        iconID: 'bear',
        type: 'external',
        link: 'https://www.instagram.com/graceis.online/',
        social: true
    },
    {
        name: 'youtube',
        icon: strawberry,
        iconID: 'strawberry',
        type: 'external',
        link: 'https://www.youtube.com/@graceis.online',
        social: true
    },
]

let blogNavList = JSON.parse(JSON.stringify(mainNavList));
blogNavList.forEach((item) => {
    if(item.type === 'internal'){
        item.link = 'https://graceis.online' + item.link;
    }
})

export const HomeNav = () => {
  return (
    <nav className="homeNav">
        <ul className="homeNavItems">
            {mainNavList.map((item, index) => {
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

function getNavbarLink(item, index){
    if(item.type === 'internal'){
        return(
            <li key={index} className="navbarButton" id={`${item.iconID}Navbar`}>
                <NavLink className={({ isActive }) => (isActive ? "navbarLink navbarLinkActive" : "navbarLink")} to={item.link}>
                    <img className="navbarImage" src={item.icon.src} alt={item.icon.alt} />
                    <p className="navbarText">{item.name}</p>
                </NavLink>
            </li>
        )
    } else{
        return(
            <li key={index} className="navbarButton" id={`${item.iconID}Navbar`}>
                <a className="navbarLink" href={item.link} target="_blank" rel="noreferrer">
                    <img className="navbarImage" src={item.icon.src} alt={item.icon.alt} />
                    <p className="navbarText">{item.name}</p>
                </a>
            </li>
        )
    }
}

export const Navbar = ({navListType}) => {
    console.log(navListType);
    let navList = null;
    if(navListType === 'main'){
        navList = mainNavList;
    } else if(navListType === 'blog'){
        navList = blogNavList;
    }
    console.log(navList);
  return (
    <nav className="navbar">
        <Link className="navbarHeaderText" to={navListType === 'main' ? '/' : 'https://graceis.online'}>
            <h1>grace manning</h1>
            <h2>creative technologist & software engineer</h2>
        </Link>
        <ul className="navbarItems">
            {navList.filter((item) => !item.social).map((item, index) => {
                return(getNavbarLink(item, index))
            })}
            <img className="navbarDivider" src={wiggleLine.src} alt={wiggleLine.alt} />
            {navList.filter((item) => item.social).map((item, index) => {
                return(getNavbarLink(item, index))
            })}
        </ul>
        <Link id="sourcesLink" to="/sources">
            image sources
        </Link>
    </nav>
  )
}

function getNavbarMobileLink(item, index){
    if(item.type === 'internal'){
        return(
            <li key={index} className="navbarButton" id={`${item.iconID}Navbar`}>
                <NavLink className={({ isActive }) => (isActive ? "navbarLink navbarLinkActive" : "navbarLink")} to={item.link}>
                    <img className="navbarImage" src={item.icon.src} alt={item.icon.alt} />
                    <p className="navbarText">{item.name}</p>
                </NavLink>
            </li>
        )
    } else{
        return(
            <li key={index} className="navbarButton" id={`${item.iconID}Navbar`}>
                <a className="navbarLink" href={item.link} target="_blank" rel="noreferrer">
                    <img className="navbarImage" src={item.icon.src} alt={item.icon.alt} />
                    <p className="navbarText">{item.name}</p>
                </a>
            </li>
        )
    }
}

export const NavbarMobile = ({navListType}) => {
    const [expanded, setExpanded] = useState(false);

    let navList = null;
    if(navListType === 'main'){
        navList = mainNavList;
    } else if(navListType === 'blog'){
        navList = blogNavList;
    }

    return(
        <nav className={expanded ? 'navbarMobile expanded' : 'navbarMobile'}>
            <div className="navbarMobileHeader">
                <Link className="navbarHeaderText" to={navListType === 'main' ? '/' : 'https://graceis.online'}>
                    <h1>grace manning</h1>
                </Link>
                <LuMenu className={`navIcon ${expanded ? 'closed' : 'open'}`} onClick={() => {setExpanded(!expanded);}} />
                <IoClose className={`navIcon ${expanded ? 'open' : 'closed'}`} onClick={() => {setExpanded(!expanded);}} />
            </div>
            <div className={`navbarMobileContent ${expanded ? 'open' : 'closed'}`}>
                <ul className={expanded ? 'navbarItems expanded' : 'navbarItems'}>
                    {navList.filter((item) => !item.social).map((item, index) => {
                        return getNavbarMobileLink(item, index);                      
                    })}
                    <img className="navbarDivider" src={wiggleLine.src} alt={wiggleLine.alt} />
                    {navList.filter((item) => item.social).map((item, index) => {
                        return getNavbarMobileLink(item, index)
                    })}
                </ul>
                <Link id="sourcesLink" to="/sources">
                    image sources
                </Link>
            </div>
        </nav>
    )
}