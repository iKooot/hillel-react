import {PlanetItemPageType} from "../../../types/planet.type";

export type PlanetsListPropType = {
    planets: PlanetItemPageType[];
    onSetPlanet: (url: string) => void;
}