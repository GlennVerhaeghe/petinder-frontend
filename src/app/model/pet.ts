import { Kind } from "./kind";

export interface Pet {
    id: number;
    name: string;
    kind: Kind;
    image: string;
    profileText: string;
    popularity: number;
}