import React, {useState} from 'react';
import classes from './NewsFiler.module.scss'
import Button from "../../ui/Button/Button";

const NewsFilter = ({onSetFilters}: {onSetFilters: (value:string, option: string) => void}) => {
    const [inputValue, setInputValue] = useState('')
    const [filterOption, setFilterOption] = useState('content')

    const filerHandler = () => {
        onSetFilters(inputValue, filterOption)
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.inputsWrapper}>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)}/>
                <select defaultValue={filterOption} onChange={(e) => setFilterOption(e.currentTarget.value)}>
                    <option value="content">Title, text or description</option>
                    <option value="hashtags">Hashtags</option>
                    <option value="author">Author</option>
                </select>
            </div>
            <Button onClick={filerHandler}>Filter</Button>
        </div>
    );
};

export default NewsFilter;