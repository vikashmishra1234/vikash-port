import React from 'react'
import css from './Project.module.scss'
import Card from './Card'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import { Zoom } from 'react-reveal';
import Spotify from '../images/spotifycard.jpg'
import Insta from '../images/instacard.jpg';
import Food from '../images/foodcard.jpg';
import Snake from '../images/snakebg.jpg';

const Project = () => {
    return (
        <>
            <div className={css.whole}>

            <div className={css.project}>
                <div className={css.work}>
                    <Slide duration={1000} bottom>
                        <h2>My Work</h2>
                    </Slide>
                    <p>
                        <Slide duration={1500} bottom>
                            I showcase my web development projects and achievements. Driven by passion and love for learning
                            I have created  diverse and user-friendly applications. Each project represents a step forword in my
                            mission to make a positive  impact  in the digital world.
                        </Slide>
                    </p>
                    <Slide duration={2000} left >
                        <div className={css.btn}> <button> <a href="#project">Projects</a> </button> </div>
                    </Slide>
                </div>
                <Zoom duration={2000}>

                    <div className={css.image}>

                    </div>
                </Zoom>


            </div>

            <div className={css.cards}>
                <div className={css.look}> <h2 >Have a look at my projects</h2><img src=" https://media.tenor.com/M-3dhXNRvWgAAAAi/peak-hi.gif" alt="img" /></div>

                <Zoom duration={1500}>
                    <div id="project"></div>
                    <div className={css.card1}>

                        <Card para={'Real time chatting app '} imageLink={'https://media.istockphoto.com/id/1447969085/photo/business-people-using-smartphone-and-pressing-review-popup-on-visual-screen-customer-review.jpg?s=1024x1024&w=is&k=20&c=Ghbm-TAZNrQbBoo3BBqrRbBuhvQc9bnHV3wuetp-MgM='} link={'https://github.com/vikashmishra1234/Real-time-chatapp'} />
                        <Card para={'Real time news app'}  imageLink={'data:image/jpeg;base64,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'} glink={'https://github.com/vikashmishra1234/Calculate'} link={'https://github.com/vikashmishra1234/Calculate'} />
                        <Card para={'Spotify Clone '} glink={'https://github.com/vikashmishra1234/Spotify-Clone'} link={' https://vikashmishra1234.github.io/Spotify-Clone/'} imageLink={Spotify} />
                    </div>
                </Zoom>
                <Zoom duration={1500}>
                    <div className={css.card2}>

                        <Card para={'instagram app using react js'} glink={'https://github.com/vikashmishra1234/instagram-clone'} link={'https://github.com/vikashmishra1234/instagram-clone'} imageLink={Insta} />
                        <Card para={'food delievery web app using react js'} glink={'https://github.com/vikashmishra1234/food-webapp'} link={'https://github.com/vikashmishra1234/food-webapp'} imageLink={Food} />
                        <Card para={'snake game using html ,css and javascript'} link={'https://github.com/vikashmishra1234/snake'} imageLink={Snake} />
                    </div>
                </Zoom>
            </div>


            </div>

        </>
    )
}

export default Project
