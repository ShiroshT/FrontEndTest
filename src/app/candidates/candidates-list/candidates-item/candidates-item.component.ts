import { Component, OnInit, Input } from '@angular/core';
import { Candidate } from '../../candidates.model';
import { CandidateService } from '../../candidates.service';

@Component({
  selector: 'app-candidates-item',
  templateUrl: './candidates-item.component.html',
  styleUrls: ['./candidates-item.component.css']
})
export class CandidatesItemComponent implements OnInit {
  @Input() candidate:Candidate;

  constructor( private candidateService : CandidateService) { }

  ngOnInit() {
  }

  onSelected() {
    this.candidateService.CandidatesSelected.emit(this.candidate)
  }

}
