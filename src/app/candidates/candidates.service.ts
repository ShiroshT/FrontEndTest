import { EventEmitter } from '@angular/core';
import { Candidate } from './candidates.model';


export class CandidateService {
    CandidatesSelected = new EventEmitter<Candidate>();

    private candidates : Candidate[] =[
        new Candidate (' A Test Politician1 ', ' A special declaration file (that) ships with every installation of TypDOM.', 'https://pbs.twimg.com/profile_images/604677924952752129/gcTy8PRT_400x400.jpg', false),
        new Candidate (' A Test Politician1 ', ' A special declaration file (that) ships with every installation of TypDOM.', 'https://pbs.twimg.com/profile_images/604677924952752129/gcTy8PRT_400x400.jpg', false),
        new Candidate (' A Test Politician1 ', ' A special declaration file (that) ships with every installation of TypDOM.', 'https://pbs.twimg.com/profile_images/604677924952752129/gcTy8PRT_400x400.jpg', true),
        new Candidate (' A Test Politician1 ', ' A special declaration file (that) ships with every installation of TypDOM.', 'https://pbs.twimg.com/profile_images/604677924952752129/gcTy8PRT_400x400.jpg', false),
    ]

    getCandidates(){
        return this.candidates.slice();
    }
}