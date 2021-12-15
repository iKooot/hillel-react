import React, {Component} from 'react';
import {StarShipsListItem} from '../../types/shipType'
import classes from './SWShipsItem.module.scss'
import Button from "../UI/Button/Button";
import Loader from "../UI/Loader/Loader";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";
import SWStarShipCharacteristics from "../SWStarShipCharacteristics/SWStarShipCharacteristics";


type MyProps = {
    ship: StarShipsListItem;
}

type MyState = {
    shipCharacteristics: null | StarShipsListItem;
    status: 'loading' | 'error' | 'success' | string;
    showCharacteristics: boolean;
    errorMessage: string;
}

class SWShipsItem extends Component<MyProps, MyState> {
    state = {
        shipCharacteristics: null,
        status: 'loading',
        showCharacteristics: false,
        errorMessage: 'Ups something went wrong',
    }

    fetchStarShipCharacteristics = async () => {
        this.setState({
            status: 'loading'
        })

        const url = this.props.ship.url ? this.props.ship.url : ''

        try {
            const response = await fetch(url, {
                method: "GET",
            })

            if (!response.ok) throw new Error('Server not work');

            const data = await response.json()

            this.setState({
                shipCharacteristics: data.result.properties,
                status: 'success',
            })
        } catch (e) {
            this.setState({
                status: 'error',
                errorMessage: 'Fetch data is failed'
            })
            console.log(e)
        }
    }

    clickHandler = () => {
        const {showCharacteristics, shipCharacteristics} = this.state

        this.setState({
            showCharacteristics: !showCharacteristics
        })

        if (!shipCharacteristics) {
            this.fetchStarShipCharacteristics()
        }
    }

    render() {
        const {
            name,
        } = this.props.ship;

        const { status, showCharacteristics, shipCharacteristics } = this.state;

        return (
            <li>
                <h3 className={classes.title}>{name}</h3>
                <div>
                    {showCharacteristics && status === 'loading' && <Loader/>}
                    {shipCharacteristics && status === 'success' && showCharacteristics && <SWStarShipCharacteristics characteristics={shipCharacteristics}/>}
                    {showCharacteristics && status === 'error' && <ErrorMessage message={this.state.errorMessage}/>}
                    <Button transparent={true} onClick={this.clickHandler}>{!showCharacteristics ? 'Show characteristics' : 'Hide characteristics'}</Button>
                </div>
            </li>
        );
    }
}

export default SWShipsItem;