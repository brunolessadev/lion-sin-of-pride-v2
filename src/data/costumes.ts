export type Level = 1 | 2 | 3;

export type Costume = {
    id: string;
    name: string;
    image: string;
    costumeName: string;
    descriptions: Record<Level, string>;
};

export type Character = {
    id: string;
    name: string;
    costumes: Costume[];
};

import { escanor } from '../characters/escanor';
import { daisy } from "../characters/daisy";

export const characters: Character[] = [
    escanor,
    daisy,
];

export const allCostumes = characters.flatMap(
    (char) => char.costumes
)