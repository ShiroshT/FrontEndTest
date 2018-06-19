import { Candidate } from "../candidates/candidates.model";

export class Petition {
    constructor (public userName:string, public shortDesc: string, public imagePath:string, public candidate:Candidate[] ) {}
}

    