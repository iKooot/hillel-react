import * as React from 'react';
import InputCheckbox from "../../ui/InputCheckbox/InputCheckbox";
import {Hashtag} from "../../../types/inputTypes";
import classes from './HashtagsList.module.scss'

type Props = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onBlur: () => void;
    hashtagsList: Hashtag[];
    valid: boolean;
    touched: boolean;
    errorMessage: string;
    successMessage?: string;
};
type State = {

};

class HashtagsList extends React.Component<Props, State> {
    render() {
        const {onChange, hashtagsList, valid, touched, errorMessage, successMessage = 'Done', onBlur} = this.props;
        return (
            <>
                <h3 className={classes.title}>
                    Choose hashtags:
                    { !valid && touched && (<span className={classes.error}>{errorMessage}</span>) }
                    { valid && touched && (<span className={classes.success}>{successMessage}</span>) }
                </h3>
                <ul className={classes.list}>
                    {hashtagsList.map(hashtag => <li><InputCheckbox onBlur={onBlur} label={hashtag.label} checked={hashtag.checked} onChange={onChange}/></li>)}
                </ul>
            </>
        );
    };
};

export default HashtagsList