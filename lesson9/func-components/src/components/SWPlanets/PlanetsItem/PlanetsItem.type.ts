import type {PlanetItemPageType} from "../../../types/planet.type";

export type PlanetsItemPropType = {
    planet: PlanetItemPageType;
    onSetPlanet: (url:string) => void;
}