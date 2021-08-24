import { Costume } from "./costume";
import { Power } from "./power";

export interface Hero {
    costume: Costume;
    gender: string;
    id: number;
    location: string;
    name: string;
    power: Power;
    ranking:number;
}