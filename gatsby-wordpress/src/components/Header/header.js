import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import classes from './Header.module.scss'
import Logo from '../UI/Logo/Logo'
import Banner from './Banner/Banner'

const Header = ({ siteTitle }) => {
  const [mobileMenu, setMobileMenu] = useState([classes.Mobile, classes.Hide])
  const [toggle, setToggle] = useState('<span></span><span></span><span></span>')
  const [module, setModule] = useState([classes.Module, classes.Hide])
  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
  }
  // The debounce function receives our function as a parameter
const debounce = (fn) => {
  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;
  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) { 
      cancelAnimationFrame(frame);
    }
    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      // Call our function and pass any params we received
      fn(...params);
    });

  } 
};
  useEffect(()=>{
    document.addEventListener('scroll', debounce(storeScroll), { passive: true });
    storeScroll();
  })

  return(

  <header>
    <div className={classes.Header}>
      <div className={classes.Bg}></div>
      <div className={classes.Content}>
        <div className={classes.Logo}>
          <Link to="/" >
            <Logo />
          </Link>
        </div>
        {/* Desktop menu */}
        <div className={classes.Menu}>
          <span><Link to="/">Home</Link></span>
          <span><Link to="/about">About</Link></span>
          <span><Link to="/contact">Contact</Link></span>
          <span><Link to="/archive">Archive</Link></span>
        </div>
        {/* Mobile Toggle Menu */}
        <div
          onClick={(()=>{setMobileMenu([classes.Mobile, classes.Show]); setToggle('');setModule([classes.Module,classes.Show])})} 
          className={classes.Toggle}
          dangerouslySetInnerHTML={{__html: toggle}}>
        </div>
        
      </div>
    </div>
    <Banner />
    <div className={mobileMenu.join(' ')}>
          <span><Link to="/">Home</Link></span>
          <span><Link to="/about">About</Link></span>
          <span><Link to="/contact">Contact</Link></span>
          <span><Link to="/archive">Archive</Link></span>
    </div>
    <div onClick={(()=>{setMobileMenu([classes.Mobile, classes.Hide]);setToggle('<span></span><span></span><span></span>');setModule([classes.Module,classes.Hide])})}
    className={module.join(' ')}></div>
  </header>
)}

export default Header
