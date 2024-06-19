import React, { useEffect, useState } from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
const Header = ({isVeg}) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const navigate = useNavigate()
    const navLinks = [
        {
            title:"Home",
            href:"/"
        },
        {
            title:"About",
            href:"#about"
        },
        {
            title:"Contact Us",
            href:"#contact"
        },
    ]
    const vegNavLinks = [
        {
            title:"Home",
            href:"/"
        },
        {
            title:"About",
            href:"/"
        },
        {
            title:"Contact Us",
            href:"/"
        },
    ]
    const handleToggleMenu = ()=>{
        if(toggleMenu){
            setToggleMenu(false)
        }
        else{
            setToggleMenu(true)
        }
    }

    const [headerColor, setHeaderColor] = useState("white")
    const [headerText, setHeaderText] = useState('white')

    const listenScrollEvent = () => {
        if(window.scrollY > 10)
          {
            setHeaderColor("bg-white sticky") 
            setHeaderText('text-black');
          } 
          else{
            setHeaderColor("bg-transparent")
            setHeaderText('text-white')
          }
      }
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent)
    })

    const menuVars = {
        initial:{
            scaleY: 0
        },
        animate:{
            scaleY: 1,
            transition:{
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0]
            }
        },
        exit:{
            scaleY: 0,
            transition:{
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    const containerVars = {
        initial: {
            transition:{
                staggerChildren: 0.09,
                staggerDirection: -1,
            }
        },
        open:{
            transition:{
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1
            }
        }
    }
    const  handleClickNavLink = ()=>{
        setTimeout(() => {
            setToggleMenu(false)
        }, 500);
    }
  return (
    <>
    <header className={`header ${headerColor}`} id='data-header' data-header>
    <div className="container">

      <h1>
        <a href="/" className={`logo ${headerText}`}>SnackMate<span className="span">.</span></a>
      </h1>

      <nav className="navbar" data-navbar id='data-navbar'>
        <ul className="navbar-list">

          <li className="nav-item">
            <a href="/" className={`navbar-link data-nav-link ${headerText}`} data-nav-link>Home</a>
          </li>

      { !isVeg ?  <> <li className="nav-item">
            <a href="#about" className={`navbar-link data-nav-link ${headerText}`} data-nav-link>About Us</a>
          </li>
 </> : <li className="nav-item">
            <a href="/" className={`navbar-link data-nav-link ${headerText}`} data-nav-link>About Us</a>
          </li>
}
        </ul>
      </nav>

      <div className="header-btn-group">
        <button className="search-btn" id='data-search-btn' aria-label="Search" data-search-btn>
        </button>

        {!isVeg ? <a href="#contact"><button className="btn btn-hover">Contact Us</button></a> : <a href="/"><button className="btn btn-hover">Contact Us</button></a> }

        <button onClick={handleToggleMenu} className="nav-toggle-btn" aria-label="Toggle Menu" id='data-menu-toggle-btn' data-menu-toggle-btn>
          <span className="line top"></span>
          <span className="line middle"></span>
          <span className="line bottom"></span>
        </button>
      </div>

    </div>
  </header>
  <AnimatePresence>
{
    toggleMenu && (
        <motion.div variants={menuVars} initial="initial" animate="animate" exit="exit" className="fixed left-0 top-0 w-full h-screen origin-top text-black bg-[#FF9D2E] z-10 p-10">
        <div className="flex h-full flex-col">
            <div className="flex justify-between">
            <h1>
            <Link to="/" className='text-black logo'>SnackMate.</Link>
          </h1>
          <p className='cursor-pointer text-md font-lora text-black font-bold' onClick={handleToggleMenu}>Close</p>
            </div>
            <motion.div variants={containerVars} initial='initial' animate='open' exit='initial' className='flex flex-col h-full justify-center font-lora items-center gap-4'>
                {!isVeg ?
                    navLinks.map((link, index)=>(
                        <div className='overflow-hidden' onClick={handleClickNavLink}>
                        <MobileNavLink key={index} title={link.title} href={link.href}/>
                    </div>
                    )) : vegNavLinks.map((link, index)=>(
                        <div className='overflow-hidden' onClick={handleClickNavLink}>
                        <MobileNavLink key={index} title={link.title} href={link.href}/>
                    </div>
                    ))
                }
            </motion.div>
        </div>
      </motion.div>
    )
}
</AnimatePresence>
 
   
 </>
  )
}

export default Header



const MobileNavLink = ({title, href}) => {

    const mobileLinkVars = {
        initial: {
            y: "30vh",
            transition:{
                duration: 0.5
            }
        },
        open:{
            y:0,
            transition:{
                duration: 0.7
            }
        }
    }

    return(
        <motion.div variants={mobileLinkVars} className='text-5xl uppercase text-black'>
            <a href={href}>
            {title}
            </a>
        </motion.div>
    )
}