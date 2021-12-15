import React, {Component} from 'react';
import classes from "./Loader.module.scss";

class Loader extends Component {
    render() {
        return (
            <div className={classes["lds-ellipsis"]}>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        );
    }
}

export default Loader;