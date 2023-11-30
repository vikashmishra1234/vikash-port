import React from 'react'
import css from './Card.module.scss'
import img from './new.jpg'

const Card = (props) => {
    console.log(props.link)
    return (
        
        <>
            <div className={css.container}>
                <div className={css.card}>
                    <div className={css.image}>
                        <img src={props.imageLink} alt="image" />
                    </div>
                    <div className={css.text}>
                       {props.para}
                    </div>
                    <div className={css.btn}>
                        <button> <a href={props.link}>View</a> </button>
                        <button> <a href={props.glink}>GitHub</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
