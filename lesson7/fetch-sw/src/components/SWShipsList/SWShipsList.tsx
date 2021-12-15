import React, {Component} from 'react';
import {StarShipsListItem} from '../../types/shipType'
import SWShipsItem from "../SWShipsItem/SWShipsItem";
import classes from "./SWShipsList.module.scss";
import SWStarShip from "../SWStarShip/SWStarShip";

type MyProps = {
    list: StarShipsListItem[];
}

class SWShipsList extends Component<MyProps> {
    render() {
        const {list: swShips} = this.props;

        let content: JSX.Element | JSX.Element[] = <h3 className={classes.title}>Ups, we don't have ships</h3>

        if (Array.isArray(swShips)  && swShips.length > 1) {
            content = swShips.map(ship => <SWShipsItem key={ship.name} ship={ship} />)
        }

        if (Array.isArray(swShips) && swShips.length === 1) {
            content = <SWStarShip key={'swShips.name'} ship={swShips[0]} />
        }

        return (
            <ul className={classes.list}>
                {content}
            </ul>
        );
    }
}

export default SWShipsList;