import { EventEmitter } from '@angular/core';
import { Petition } from './petitions.model';

export class PetitionService {
    PetitionSelected = new EventEmitter<Petition>();

    private petitions : Petition[] =[
        new Petition('E119034', 'There there is dsodusds oooosd sd', 'https://pbs.twimg.com/profile_images/604677924952752129/gcTy8PRT_400x400.jpg', [])
    ]

    getCandidates(){
        return this.petitions.slice();
    }
}




// export class CandidateService {
//     CandidatesSelected = new EventEmitter<Candidate>();

//     private candidates : Candidate[] =[
//         new Candidate (' A Test Politician1 ', ' A special declaration file (that) ships with every installation of TypDOM.', 'https://pbs.twimg.com/profile_images/604677924952752129/gcTy8PRT_400x400.jpg', false),
//         new Candidate (' A Test Politician1 ', ' A special declaration file (that) ships with every installation of TypDOM.', 'https://pbs.twimg.com/profile_images/604677924952752129/gcTy8PRT_400x400.jpg', false),
//         new Candidate (' A Test Politician1 ', ' A special declaration file (that) ships with every installation of TypDOM.', 'https://pbs.twimg.com/profile_images/604677924952752129/gcTy8PRT_400x400.jpg', true),
//         new Candidate (' A Test Politician1 ', ' A special declaration file (that) ships with every installation of TypDOM.', 'https://pbs.twimg.com/profile_images/604677924952752129/gcTy8PRT_400x400.jpg', false),
//     ]

//     getCandidates(){
//         return this.candidates.slice();
//     }
// }


// export class Petition {
//     constructor (public userName:string, public shortDesc: string, public imagePath:string, public candidate:Candidate[] ) {}
// }

    