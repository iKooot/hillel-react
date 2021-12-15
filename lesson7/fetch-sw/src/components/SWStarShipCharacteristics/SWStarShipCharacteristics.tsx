import React, {Component} from 'react';
import {ShipType} from '../../types/shipType'
import classes from './SWStarShipCharacteristics.module.scss'


type MyProps = {
    characteristics: ShipType;
}

class SWStarShipCharacteristics extends Component<MyProps> {
    render() {
        const {
            model,
            starship_class,
            manufacturer,
            cost_in_credits,
            length,
            crew,
            passengers,
            max_atmosphering_speed,
            hyperdrive_rating,
            MGLT,
            cargo_capacity,
            pilots,
        } = this.props.characteristics;

        return (
            <div>
                <p>Characteristics:</p>
                <ul className={classes.options}>
                    <li>Model: <span>{model}</span></li>
                    <li>Class: <span>{starship_class}</span></li>
                    <li>Manufacturer: <span>{manufacturer}</span></li>
                    <li>Price: <span>{cost_in_credits}</span></li>
                    <li>Length: <span>{length}</span></li>
                    <li>Crew: <span>{crew}</span></li>
                    <li>Passengers: <span>{passengers}</span></li>
                    <li>Max speed: <span>{max_atmosphering_speed}</span></li>
                    <li>The class of this starships hyperdrive: <span>{hyperdrive_rating}</span></li>
                    <li>The Maximum number of Megalights this starship can travel in a standard hour: <span>{MGLT}</span></li>
                    <li>The maximum number of kilograms that this starship can transport: <span>{cargo_capacity}</span></li>
                    {pilots.length > 0 && <li>Starship has been piloted by: <ul className={classes['inner-list']}>{pilots.map((pilot, i) => <li key={pilot}><a
                        href={pilot}>Pilot {i + 1}</a></li>)}</ul></li>}
                </ul>
            </div>
        );
    }
}

export default SWStarShipCharacteristics;