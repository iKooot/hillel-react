import React, {Component} from 'react';
import classes from './NewsFilters.module.scss'

type MyProps = {
    select: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSetFilterOption: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

class NewsFilters extends Component<MyProps> {
    render() {
        return (
            <div className={classes.container}>
                <input onChange={this.props.onChange} type="text"/>
                <select onChange={this.props.onSetFilterOption} defaultValue={this.props.select}>
                    <option value="content">Content</option>
                    <option value="author">Author</option>
                    <option value="hashtags">Hashtags</option>
                </select>
            </div>
        );
    }
}

export default NewsFilters;