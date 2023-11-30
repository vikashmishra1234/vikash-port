import React, { useEffect, useRef, useState } from 'react'
import css from './Navbar.module.scss'
import  './Navbar.module.scss'
import Fade from 'react-reveal/Fade';
import { GiHamburgerMenu } from "react-icons/gi";
import Zoom from 'react-reveal/Zoom';
import { NavLink, BrowserRouter, Routes, Route } from 'react-router-dom'
import { Typewriter, Cursor } from 'react-simple-typewriter'
import { RxCross2 } from "react-icons/rx";
import Roll from 'react-reveal/Roll';



function Navbar() {

    const [color,setColor]=useState(false);
    const [menuOpend,setmenuOpened]=useState(false);

    const handleMenu=()=>{
        setmenuOpened(!menuOpend);
    }

    const changeColor = ()=>{
        if(window.scrollY>=10){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
    window.addEventListener('scroll',changeColor)


    const text=<Typewriter
        words={['MernDeveloper','Freelancer','UI/UX Designer']}
        loop={true}
        typeSpeed={70}
        deleteSpeed={40}
        delaySpeed={500}
       
        
        


    />


    return (

        <div>
            <Fade top duration={2500}>

                <header style={color?{ background:'#2f2a3a', transition: '.7s ease-in'}:''} className={css.header}>
                    <span className={css.logo}>Vikash</span>
                    {/* <nav className={`${menuOpend?css.open:css.navbar}`}> */}
                    <div  className={`${css.navbar} ` }>

                        <nav className={menuOpend?css.open:''}>

                      
                            <NavLink className={({ isActive }) => isActive ? css.active : ''} to='/' >Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? css.active : ''} to='/about'>about</NavLink>
                            <NavLink className={({ isActive }) => isActive ? css.active : ''} to='/project' >Projects</NavLink>
                            <NavLink className={({ isActive }) => isActive ? css.active : ''} to='/contact' >Contact</NavLink>
                      

                        </nav>

                       

                       

                    </div>
                <div className={css.hamburger} onClick={handleMenu}> 
                {
                    menuOpend?  <Roll duration={1000}  ><RxCross2 /></Roll>: <GiHamburgerMenu />
                }
               
                </div>
                </header>
            </Fade>
            <section className={css.home}>
                <Zoom duration={2000}>

                    <div className={css.homeContent}>
                        <h1>Hi, I am Vikash</h1>

                        <h3>Full Stack Developer</h3>
                        <p>
                        I am a <h2>{text}</h2> 
                           <br />I build interactive websites that<br /> run across the platform and devices.
                        </p>
                        <div className={css.btnBox}>
                            <a href="#project">Projects</a>
                            <a href="https://wa.me/8979481819">Let's Talk</a>

                        </div>
                    </div>
                </Zoom>

                <div className={css.homeSci}>
                    <Fade delay={1000} left> <a href="https://github.com/vikashmishra1234"><i class='bx bxl-github' ></i></a></Fade>
                    <Zoom delay={1000}><a href="https://instagram.com/v.i.k.a.s.h.123?igshid=MzRlODBiNWFlZA=="><i class='bx bxl-instagram' ></i></a></Zoom>
                    <Fade delay={1000} right> <a href="https://www.linkedin.com/in/vikash-mishra-099478277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class='bx bxl-linkedin'></i></a></Fade>


                </div>

            </section>


        </div>
        // <div>
        //   <div className={css.navbar}>
        //     <div className={css.vikash}>

        //         <span>Vikash</span>
        //     </div>
        //     <div className={css.navNavlinks}>

        //         <ul>
        //             <li>
        //                 <BrowserRouter>

        //                 <NavLink to = '/'>Home</NavLink>
        //                 <NavLink to = '/project'>Projects</NavLink>
        //                 <NavLink to = '/about'>About Me</NavLink>
        //                 <NavLink to = '/contact'>Contact</NavLink>
        //                 </BrowserRouter>


        //             </li>
        //         </ul>
        //     </div>

        //   </div>
        // </div>
    )
}

export default Navbar
