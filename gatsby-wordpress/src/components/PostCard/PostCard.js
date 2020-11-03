import React from 'react';
import { Link } from 'gatsby';
import classes from './PostCard.module.scss';

const postCard = (props) => {
    return (
        <div className={classes.PostCard} >
            <div>
                <img src={props.img} alt="hi"/>
            </div>
            <Link style={{color: 'black'}} to={props.slug}>
                <h2>{props.title}</h2>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
        </div>
    )
}

export default postCard;