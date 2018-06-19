import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-status-update',
  templateUrl: './status-update.component.html',
  styleUrls: ['./status-update.component.css']
})
export class StatusUpdateComponent implements OnInit {

  @ViewChild('f') statusUpdate: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
      console.log(this.statusUpdate);

  }


}
