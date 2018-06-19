import { Component, OnInit } from '@angular/core';
import { SiteFeedService } from './sitefeed.service';
import { SiteFeed } from './sitefeed.model';

@Component({
  selector: 'app-sitefeed',
  templateUrl: './sitefeed.component.html',
  styleUrls: ['./sitefeed.component.css'],
  providers: [SiteFeedService]
})
export class SitefeedComponent implements OnInit {

  sitefeeds :SiteFeed[] = [];

  constructor( private sidefeedservice: SiteFeedService) { }

  ngOnInit() {
    this.sitefeeds = this.sidefeedservice.getsiteFeed();
  }

}
