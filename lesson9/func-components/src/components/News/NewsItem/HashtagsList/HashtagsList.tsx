import React from 'react';
import classes from './HashtagsList.module.scss'

const HashtagsList = ({hashtags}: {hashtags?: string[]}) => {
    return (
        <div className={classes.wrapper}>
            <h3>Hashtags:</h3>
            <ul>
                {hashtags && hashtags.map( (hashtag, i) => <li key={i}>{hashtag}</li>)}
            </ul>
        </div>
    );
};

export default HashtagsList;