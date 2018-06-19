import { Component, OnInit } from '@angular/core';
import { CandidateService } from './candidates.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css'], 
  providers: [CandidateService]

})
export class CandidatesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
