import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidates.model';
import { CandidateService } from '../candidates.service';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css']
})
export class CandidatesListComponent implements OnInit {

  candidates: Candidate[] =[];
  constructor( private candidateService: CandidateService) { }

  ngOnInit() {
    this.candidates = this.candidateService.getCandidates();
  }

}
