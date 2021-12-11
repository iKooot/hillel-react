import React, {Component} from 'react';
import classes from './HashtagsList.module.scss'

type MyProps = {
    hashtags?: string[]
}

class HashtagsList extends Component<MyProps> {
    render() {
        const {hashtags} = this.props

        return (
            <div className={classes.wrapper}>
                <h3>Hashtags:</h3>
                <ul>
                    {hashtags && hashtags.map( (hashtag, i) => <li key={i}>{hashtag}</li>)}
                </ul>
            </div>
        );
    }
}

export default HashtagsList;