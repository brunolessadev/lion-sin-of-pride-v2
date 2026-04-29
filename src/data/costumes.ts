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
import { meliodas } from "../characters/meliodas";
import { drake } from "../characters/drake";
import { diane } from "../characters/diane";
import { mannie } from "../characters/mannie";
import { jericho } from '../characters/jericho';
import { king } from '../characters/king';
import { elaine } from '../characters/elaine';
import { dreyfus } from '../characters/dreyfus';
import { tristan } from '../characters/tristan';
import { slater } from '../characters/slater';
import { dredrin } from '../characters/dredrin';
import { tioreh } from '../characters/tioreh';
import { bug } from '../characters/bug';
import { howzer } from '../characters/howzer';
import { gilthunder } from '../characters/gilthunder';
import { griamore } from '../characters/griamore';
import { hendrickson } from '../characters/hendrickson';

export const characters: Character[] = [
    escanor,
    daisy,
    meliodas,
    drake,
    diane,
    mannie,
    jericho,
    king,
    elaine,
    dreyfus,
    tristan,
    slater,
    dredrin,
    tioreh,
    bug,
    howzer,
    gilthunder,
    griamore,
    hendrickson,
];

export const allCostumes = characters.flatMap(
    (char) => char.costumes
)